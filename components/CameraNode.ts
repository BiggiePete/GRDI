import { Node, NodeBuilder } from "@baklavajs/core";

export class CameraNode extends Node {
    type = "Display";
    name = "DeviceName";

    constructor() {
        super();
        this.addOption("Camera", "SelectOption", "Select Camera Device", undefined, {
            items: [
                "None",
                "PICamera",
                "ZED Mini",
                "LogiWebCam"
            ]
        })
    }
    public calculate() {
        const cameraselected = this.getOptionValue("Camera");
        switch (cameraselected) {
            case "PICamera":
                this.addOutputInterface("Video Feed");
                this.getInterface("Video Feed").value = 1
                break;
            case "ZED Mini":
                this.addOutputInterface("Video Feed");
                this.getInterface("Video Feed").value = 2
                break;
            case "LogiWebCam":
                this.addOutputInterface("Video Feed");
                this.getInterface("Video Feed").value = 3
                break;
            default:
                try{
                    this.removeInterface("Video Feed")
                } catch {}
                break;
        }

    }
}
/*

export default new NodeBuilder("CameraNode")
    .setName("Camera Driver")
    .addOption("Camera", "SelectOption", "Select Device", "Camera Selection", {
        items: [
            "PICamera",
            "ZED Mini",
            "LogiWebCam"
        ]
    })
    .onCalculate((n) => {
        const cam = n.getOptionValue("Camera");
        console.log(cameraselected)
        if (cameraselected === "PICamera") {
            this.addOutputInterface("Video Feed")
            this.getInterface("Video Feed").value = 1
        }
        else if (cameraselected === "ZED Mini") {
            this.addOutputInterface("Video Feed")
            this.getInterface("Video Feed").value = 2
        }
        else if (cameraselected === "LogiWebCam") {
            this.addOutputInterface("Video Feed")
            this.getInterface("Video Feed").value = 3
        }
    })
    */