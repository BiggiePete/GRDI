import { Node } from "@baklavajs/core";
import Vector3 from "~/components/ROSFormats/Vector3";

export class VectorNode extends Node {
    type = "Vector.Math";
    name = "Vector Math";
    group = "Math";


    constructor() {
        super();
        this.addInputInterface("Vector 1", "", new Vector3(0, 0, 0), { type: Vector3.type });
        this.addInputInterface("Vector 2", "", new Vector3(0, 0, 0), { type: Vector3.type });
        this.addOption("Operation", "SelectOption", "Add", undefined, {
            items: ["Add", "Subtract", "Multiply", "Divide"]
        });
        this.addOutputInterface("Result");
    }

    calculate() {
        const n1: Vector3 = this.getInterface("Vector 1").value;
        const n2: Vector3 = this.getInterface("Vector 2").value;
        const operation = this.getOptionValue("Operation");
        let result;
        if (operation === "Add") {
            result = new Vector3(n1.x + n2.x, n1.y + n2.y, n1.z + n2.z)
        } else if (operation === "Subtract") {
            result = new Vector3(n1.x - n2.x, n1.y - n2.y, n1.z - n2.z)
        } else if (operation === "Multiply") {
            result = result = new Vector3(n1.x * n2.x, n1.y * n2.y, n1.z * n2.z)
        } else if (operation === "Divide") {
            result = new Vector3(n1.x / n2.x, n1.y / n2.y, n1.z / n2.z)
        }
        this.getInterface("Result").value = result;
    }
}