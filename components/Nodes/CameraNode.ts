import { Node } from "@baklavajs/core";

//datatypes
import CameraInfoMessage from "../ROSFormats/Messages/CameraInfoMessage";
import ImageMessage from "../ROSFormats/Messages/ImageMessage";
import CompressedImageMessage from "../ROSFormats/Messages/CompressedImageMessages";
import Header from "../ROSFormats/Header";
import Time from "../ROSFormats/Time";
import RegionOfInterestMessage from "../ROSFormats/Messages/RegionOfInterestMessage";

export class CameraNode extends Node {
    type = "Camera";
    name = "Camera Input Device";
    static _group = "Input"

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
        this.addOutputInterface("Camera Info", { type: CameraInfoMessage.type.toString() })
        this.addOutputInterface("Image", { type: ImageMessage.type });
        this.addOutputInterface("Compressed Image", { type: CompressedImageMessage.type })
    }
    public calculate() {
        const cameraselected = this.getOptionValue("Camera");
        console.log(cameraselected)
        switch (cameraselected) {
            case "PICamera":
                const result = new CameraInfoMessage(new Header(0, new Time(1, 1 * 100000000), '0'), 1024, 1024, "perspective", [0], [0], [0], [0], 0, 0, new RegionOfInterestMessage(0, 0, 1024, 1024, true));
                console.log(result);
                this.getInterface("Camera Info").value = [result, CameraInfoMessage]
                break;
            case "ZED Mini":

                break;
            case "LogiWebCam":

                break;
            default:
                break;
        }

    }
}