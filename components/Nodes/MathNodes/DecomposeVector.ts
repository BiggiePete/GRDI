import { Node } from "@baklavajs/core";
import Vector3 from "~/components/ROSFormats/Vector3";

export class DecomposeVectorNode extends Node {
    type = "VectorMath";
    name = "Decompose Vector";
    static _info = {
        type: "Vector.Decomp",
        group: "Math"
    }


    constructor() {
        super();
        this.addInputInterface("Vector", "", new Vector3(0, 0, 0), { type: Vector3.type })
        
        this.addOutputInterface("X",{type:"number"})
        this.addOutputInterface("Y",{type:"number"})
        this.addOutputInterface("Z",{type:"number"})
    }

    calculate() {
        this.getInterface("X").value = this.getInterface("Vector").value.x
        this.getInterface("Y").value = this.getInterface("Vector").value.y
        this.getInterface("Z").value = this.getInterface("Vector").value.z
    }
}