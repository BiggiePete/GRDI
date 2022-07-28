<template>
    <div @keydown.ctrl.83.prevent.stop="SaveProject">
        <Navigation @save="SaveProject" @load="LoadProject" @loadrecent="LoadRecent"></Navigation>
        <div id="EditorDiv">
            <baklava-editor :plugin="viewPlugin"></baklava-editor>
        </div>
    </div>
</template>

<script>
import { Editor, NodeBuilder } from "@baklavajs/core"
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue"
import { Engine } from "@baklavajs/plugin-engine"
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types"
import { OptionPlugin } from "@baklavajs/plugin-options-vue"


import { MathNode } from "@/components/Nodes/MathNode.ts"
import { DisplayNode } from "@/components/Nodes/DisplayNode.ts"
import { CameraNode } from "@/components/Nodes/CameraNode.ts"
import { SplitterNode } from "@/components/Nodes/SplitterNode.ts"


import * as Save from "@/static/Scripts/SaveJson.ts"
import { ROSMessages } from "~/components/ROSFormats/ROSMessages_All.ts"
import Navigation from "~/components/Navigation.vue"

export default {
    data: () => ({
        editor: new Editor(),
        viewPlugin: new ViewPlugin(),
        engine: new Engine(true),
        intfTypePlugin: new InterfaceTypePlugin()
    }),
    created() {
        this.editor.use(this.viewPlugin);
        this.editor.use(this.engine);
        this.editor.use(new OptionPlugin());
        this.editor.use(this.intfTypePlugin);
        this.viewPlugin.enableMinimap = false;

        //add nodes
        this.RegisterNodes();

        //add colors
        this.RegisterColors();
    },
    methods: {
        SaveProject() {
            let data = this.editor.save();
            Save.SaveJSON("Project.grdi", JSON.stringify(data));
            localStorage.setItem("Recent",JSON.stringify(data));
        },
        LoadProject() {
            let input = document.createElement("input");
            input.type = "file";
            input.setAttribute("multiple", false);
            input.setAttribute("accept", ".GRDI");
            input.onchange = _this => {
                const file = Array.from(input.files);
                input.files[0].text().then((e) => {
                    this.editor.load(JSON.parse(e));
                });
            };
            input.click();
        },
        LoadRecent(){
            this.editor.load(JSON.parse(localStorage.getItem("Recent")));
        },
        RegisterNodes() {
            this.editor.registerNodeType("Math", MathNode);
            this.editor.registerNodeType("Display", DisplayNode, DisplayNode._group);
            this.editor.registerNodeType("Camera", CameraNode);
            this.editor.registerNodeType("Splitter", SplitterNode, SplitterNode._group);
        },
        RegisterColors() {
            // for every type of ROS message, register it's respective color
            ROSMessages.forEach((m) => {
                this.intfTypePlugin.addType(m.type, m.__color)

            })
        }
    },
    components: { Navigation }
}
</script>
<style>
::-webkit-scrollbar {
    color: transparent;
    background: transparent;
    width: 0px;
    height: 0px;
}

#EditorDiv {
    z-index: -1;
    position: absolute;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
}
</style>