<template>
    <div @keydown.ctrl.83.prevent.stop="SaveProject" class="EditorDiv">
        <baklava-editor :plugin="viewPlugin"></baklava-editor>
    </div>
</template>

<script>
const electron = require('electron')
const fs = require('fs');
//const { dialog } = require('electron').remote

import { Editor } from "@baklavajs/core"
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue"
import { Engine } from "@baklavajs/plugin-engine"
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types"
import { OptionPlugin } from "@baklavajs/plugin-options-vue"


import { AllNodes } from "@/components/Nodes/AllNodes.ts"


import { ROSMessages } from "@/components/ROSFormats/ROSMessages_All.ts"
import { SaveJSON } from "~/static/Scripts/SaveJson";
import { DisplayNode } from "./Nodes/SimpleNodes/DisplayNode";


export default {
    props: {
        editorSize: {
            x: Number,
            y: Number,
            w: Number,
            h: Number,
        }
    },
    data: () => ({
        editor: new Editor(),
        viewPlugin: new ViewPlugin(),
        engine: new Engine(true),
        intfTypePlugin: new InterfaceTypePlugin(),
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
        this.RegisterNodes();

        //add colors
        this.RegisterColors();
        

        //to add node to the editor screen programically, first instance the node
        // const n = new MY_NODE();
        //then add it to the editor
        // this.editor.addNode(n)

    },
    methods: {
        SaveProject() {
            let data = this.editor.save();
            let options = {
                title: "Save File",
                defaultPath: "Project" + new Date() + ".grdi",
                buttonLabel: "Save",

                filters: [
                    { name: 'grdi', extentions: ['grdi'] }
                ]
            };
            localStorage.setItem("Recent", JSON.stringify(data));
            SaveJSON('Project.grdi', JSON.stringify(data))
            // dialog.showSaveDialog(null, options).then(({ fp }) => {
            //     fs.writeFileSync(fp, JSON.stringify(data), 'utf-8')
            // })
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
        RegisterNodes() {
            AllNodes.forEach((n) => {
                const _n = new n();
                this.editor.registerNodeType(_n.type, n, _n.group);
            })
        },
        RegisterColors() {
            // for every type of ROS message, register it's respective color
            ROSMessages.forEach((m) => {
                this.intfTypePlugin.addType(m.type, m.__color)
            })
        },
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