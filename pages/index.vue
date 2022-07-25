<template>
    <div style="width:100vw;height:100vh">
        <button @click="SaveProject">Save</button>
        <button @click="LoadProject">Load</button>
        <baklava-editor :plugin="viewPlugin"></baklava-editor>
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
import { CameraInfoMessage } from "@/components/ROSFormats/Messages/CameraInfoMessage.ts"
import * as Save from "@/static/Scripts/SaveJson.ts"

export default {
    data: () => ({
        editor: new Editor(),
        viewPlugin: new ViewPlugin(),
        engine: new Engine(true),
        intfTypePlugin: new InterfaceTypePlugin()
    }),
    created() {
        this.editor.use(this.viewPlugin);
        this.editor.use(this.engine)
        this.editor.use(new OptionPlugin())
        this.editor.use(this.intfTypePlugin)
        this.viewPlugin.enableMinimap = false;
        this.intfTypePlugin.addType("number",CameraInfoMessage.__color );
        // create new node
        const SelectTestNode = new NodeBuilder("SelectTestNode")
            .addOption("Simple", "SelectOption", "A", undefined, { items: ["A", "B", "C"] })
            .addOption("Advanced", "SelectOption", 3, undefined, {
                items: [
                    { text: "X", value: 1 },
                    { text: "Y", value: 2 },
                    { text: "Z", value: 3 },
                ]
            })
            .addOutputInterface("Simple")
            .addOutputInterface("Advanced")
            .onCalculate((n) => {
                n.getInterface("Simple").value = n.getOptionValue("Simple");
                n.getInterface("Advanced").value = n.getOptionValue("Advanced");
            })
            .build();
        // add node to editor
        this.editor.registerNodeType("SelectTestNode", SelectTestNode)
        this.editor.registerNodeType("MathNode", MathNode)
        this.editor.registerNodeType("DisplayNode", DisplayNode)
        this.editor.registerNodeType("CameraNode", CameraNode)




    },
    methods: {
        SaveProject() {
            let data = this.editor.save()
            Save.SaveJSON("Project.grdi", JSON.stringify(data));

        },
        LoadProject() {
            let input = document.createElement('input');
            input.type = 'file';
            input.setAttribute("multiple", false);
            input.setAttribute("accept", ".GRDI")
            input.onchange = _this => {
                const file = Array.from(input.files);
                input.files[0].text().then((e) => {
                    this.editor.load(JSON.parse(e));
                })
            };
            input.click();
        }
    }
}
</script>