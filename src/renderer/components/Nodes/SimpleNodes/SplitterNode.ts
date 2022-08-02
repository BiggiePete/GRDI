import { Node } from "@baklavajs/core";

//datatypes
import CameraInfoMessage from "../../ROSFormats/Messages/CameraInfoMessage";
import ImageMessage from "../../ROSFormats/Messages/ImageMessage";
import CompressedImageMessage from "../../ROSFormats/Messages/CompressedImageMessages";
import Header from "../../ROSFormats/Header";
import Time from "../../ROSFormats/Time";
import RegionOfInterestMessage from "../../ROSFormats/Messages/RegionOfInterestMessage";

export class SplitterNode extends Node {
    name = "Type Splitter"
    type = "Splitter"
    group = "Simple Nodes"

    static _group = "SimpleNodes"
    constructor() {
        super();
        this.addInputInterface("Data");
    }
    public calculate() {
        const Input = this.getInterface("Data").value;
        try {
            switch (Input[1]){
                case CameraInfoMessage:
                    
                    break;
            }
        } catch (error) {

        }
    }
}