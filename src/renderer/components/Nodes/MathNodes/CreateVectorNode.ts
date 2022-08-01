import { Node } from "@baklavajs/core";
import Vector3 from "~/components/ROSFormats/Vector3";

export class CreateVectorNode extends Node {
    type = "Vector.Create";
    name = "Create Vector";
    static _info = {
        type: "Vector.Create",
        group: "Math"
    }


    constructor() {
        super();
        this.addInputInterface("X", "NumberOption", 0);
        this.addInputInterface("Y", "NumberOption", 0);
        this.addInputInterface("Z", "NumberOption", 0);
        
        this.addOutputInterface("Result", { type: Vector3.type });
    }

    calculate() {
        const x = this.getInterface("X").value,y = this.getInterface("Y").value,z = this.getInterface("Z").value
        let result = new Vector3(x,y,z);

        this.getInterface("Result").value = result;
    }
}