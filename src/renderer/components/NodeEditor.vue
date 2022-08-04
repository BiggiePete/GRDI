<template>
    <div @keydown.ctrl.83.prevent.stop="SaveProject" class="EditorDiv">
        <baklava-editor :plugin="viewPlugin"></baklava-editor>
    </div>
</template>

<script>
const electron = require('electron')
const fs = require('fs');
//const { dialog } = require('electron').remote

import { eventBus } from "~/plugins/eventBus";

import { Editor, Node } from "@baklavajs/core"
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue"
import { Engine } from "@baklavajs/plugin-engine"
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types"
import { OptionPlugin } from "@baklavajs/plugin-options-vue"


import { ROSMessages } from "@/components/ROSFormats/ROSMessages_All.ts"
import { SaveJSON } from "@/static/Scripts/SaveJson";


export default {
    props: {
    },
    data: () => ({
        editor: new Editor(),
        viewPlugin: new ViewPlugin(),
        engine: new Engine(true),
        intfTypePlugin: new InterfaceTypePlugin(),
        registeredNodes: new Array()
    }),
    created() {
        electron.ipcRenderer.on('FILE_OPEN', (event, args) => {
            this.LoadProject(args);
        })
        electron.ipcRenderer.on('save', (event, args) => {
            this.SaveProject();
        })
        electron.ipcRenderer.on('loadcache', (event, args) => {
            this.LoadRecent();
        })
        electron.ipcRenderer.on('new', (event, args) => {
            this.NewProject();
        })
        this.editor.use(this.viewPlugin);
        this.editor.use(this.engine);
        this.editor.use(new OptionPlugin());
        this.editor.use(this.intfTypePlugin);
        this.viewPlugin.enableMinimap = true;

        //add nodes
        //this.RegisterNodes(); //nodes are now registered on the fly

        //add colors
        this.RegisterColors();

        //to add node to the editor screen programically, first instance the node
        // const n = new MY_NODE();
        //then add it to the editor
        //this.editor.addNode(n)
        eventBus.$on("NodeRequested", (data) => {
            this.JITNodeBuilder(data)
        })
    },
    methods: {
        SaveProject() {
            let data = this.editor.save();
            localStorage.setItem("Recent", JSON.stringify(data));
            SaveJSON('Project.grdi', JSON.stringify(data))
        },
        LoadProject(event) {
            this.editor.load(JSON.parse(fs.readFileSync(event[0])))
        },
        NewProject() {
            getCurrentWindow().reload();
        },
        LoadRecent() {
            this.editor.load(JSON.parse(localStorage.getItem("Recent")));
        },
        RegisterColors() {
            // for every type of ROS message, register it's respective color
            ROSMessages.forEach((m) => {
                this.intfTypePlugin.addType(m.type, m.__color)
            })
        },
        JITNodeBuilder(nodeInfo) {
            console.log(nodeInfo)
            class JITNode extends Node {
                type = nodeInfo.name;
                name = nodeInfo.name;
                group = nodeInfo.group ? nodeInfo.group : "";

                constructor() {
                    super();
                    if (nodeInfo.inputs.length < 1 || nodeInfo.inputs[0].dataType != undefined) {
                        let int = 0;

                        nodeInfo.inputs.forEach((i) => {
                            this.addInputInterface("in " + i.dataType + "" + int.toString(), undefined, "", { type: i.dataType })

                            int++;
                        })
                    }
                    if (nodeInfo.outputs.length < 1 || nodeInfo.outputs[0].dataType != undefined) {
                        let int = 0

                        nodeInfo.outputs.forEach((o) => {
                            this.addOutputInterface("out " + o.dataType + "" + int.toString(), { type: o.dataType })

                            int++;
                        })
                    }
                }
            }
            for (let i = 0; i < this.registeredNodes.length; i++) {
                const rn = this.registeredNodes[i];
                if (rn.name == nodeInfo.name) {
                    this.editor.addNode(new JITNode())
                    console.log("node added ADDED PREVIOUSLY")
                    return;
                }
            }


            this.registeredNodes.push(nodeInfo)
            this.editor.registerNodeType(nodeInfo.name, JITNode, JITNode.group)
            console.log("node registered")
            this.editor.addNode(new JITNode())
            console.log("node added NOT REGISTERED PREVIOUSLY")

        }
    },
}
</script>
<style>
::-webkit-scrollbar {
    color: transparent;
    background: transparent;
    width: 0px;
    height: 0px;
}

.EditorDiv {
    z-index: 1;
    position: absolute;
}
</style>