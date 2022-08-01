import { Node } from "@baklavajs/core";
import Vector3 from "~/components/ROSFormats/Vector3";

export class NormalizeVectorNode extends Node {
    type = "Vector.Norm";
    name = "Normalize";
    static _info = {
        type: "Vector.Norm",
        group: "Math"
    }


    constructor() {
        super();
        this.addInputInterface("Vector", "", new Vector3(0, 0, 0), { type: Vector3.type });
        this.addOutputInterface("Result", { type: Vector3.type });
    }

    calculate() {
        const v: Vector3 = this.getInterface("Vector").value;
        const length = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2) + Math.pow(v.z, 2));
        let result = new Vector3(v.x / length, v.y / length, v.z / length);

        this.getInterface("Result").value = result;
    }
}