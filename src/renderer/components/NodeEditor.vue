<template>
    <div @keydown.ctrl.83.prevent.stop="SaveProject" class="EditorDiv">
        <baklava-editor :plugin="viewPlugin"></baklava-editor>
    </div>
</template>

<script>
const electron = require('electron')
import { Editor } from "@baklavajs/core"
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue"
import { Engine } from "@baklavajs/plugin-engine"
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types"
import { OptionPlugin } from "@baklavajs/plugin-options-vue"


import { AllNodes } from "@/components/Nodes/AllNodes.ts"


import * as Save from "@/static/Scripts/SaveJson.ts"
import { ROSMessages } from "@/components/ROSFormats/ROSMessages_All.ts"


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
            // here the args will be the fileObj.filePaths array 
            // do whatever you need to do with it 
            this.LoadProject(args)
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
    },
    methods: {
        SaveProject() {
            let data = this.editor.save();
            Save.SaveJSON("Project.grdi", JSON.stringify(data));
            localStorage.setItem("Recent", JSON.stringify(data));
        },
        LoadProject(event) {
            const fs = require('fs');
            this.editor.load(JSON.parse(fs.readFileSync(event[0])))

        },
        LoadRecent() {
            this.editor.load(JSON.parse(localStorage.getItem("Recent")));
        },
        RegisterNodes() {
            AllNodes.forEach((n) => {
                this.editor.registerNodeType(n._info.type, n, n._info.group);
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
    z-index: -1;
    position: absolute;
}
</style>