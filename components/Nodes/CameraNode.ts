import { Node } from "@baklavajs/core";

export class CameraNode extends Node {
    type = "CameraNode";
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
        this.addOutputInterface("VideoFeed");
    }
    public calculate() {
        const cameraselected = this.getOptionValue("Camera");
        switch (cameraselected) {
            case "PICamera":

                this.getInterface("Video Feed").value = 1
                break;
            case "ZED Mini":

                this.getInterface("Video Feed").value = 2
                break;
            case "LogiWebCam":

                this.getInterface("Video Feed").value = 3
                break;
            default:
                break;
        }

    }
}