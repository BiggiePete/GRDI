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


import { SaveJSON } from "@/static/Scripts/SaveJson";
import { nodeNameColorDict } from "./ROSFormats/Messages/AllMessagesAllColors";
import { customNodesDir, ReadCustomNodes } from '@/../extraResources/Nodes/NodeHandler';
import { compressSync, uncompressSync } from "snappy";


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
            this.JITNodeBuilder(data, true)
        })
    },
    methods: {
        SaveProject() {
            //needs to be re-factored to save custom nodes to file
            let data = this.editor.save();

            data.custom = ReadCustomNodes();
            const cData = compressSync(JSON.stringify(data))
            localStorage.setItem("Recent", cData);
            SaveJSON('Project.grdi', cData)
        },
        LoadProject(event) {

            const data = JSON.parse(uncompressSync(fs.readFileSync(event[0])))
            //data.custom needs to be sent off and have all of the nodes registered
            fs.writeFileSync(customNodesDir, JSON.stringify(data.custom))
            data.custom.forEach((cN) => {
                this.JITNodeBuilder(cN, false);
            })

            this.editor.load(data)
        },
        NewProject() {
            getCurrentWindow().reload();
        },
        LoadRecent() {
            const data = JSON.parse(uncompressSync(localStorage.getItem("Recent")));

            fs.writeFileSync(customNodesDir, JSON.stringify(data.custom))
            data.custom.forEach((cN) => {
                this.JITNodeBuilder(cN, false);
            })

            this.editor.load(data)
        },
        RegisterColors() {
            // for every type of ROS message, register it's respective color
            nodeNameColorDict().forEach((nN) => {
                this.intfTypePlugin.addType(nN.name, nN.color)
            })
        },
        JITNodeBuilder(nodeInfo, display) {
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
                if (rn.name == nodeInfo.name && display) {
                    this.editor.addNode(new JITNode())
                    console.log("node added ADDED PREVIOUSLY")
                    return;
                }
            }


            this.registeredNodes.push(nodeInfo)
            this.editor.registerNodeType(nodeInfo.name, JITNode, JITNode.group)
            console.log("node registered")
            if (display) {
                this.editor.addNode(new JITNode())
            }
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