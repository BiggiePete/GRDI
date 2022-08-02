import { Node } from "@baklavajs/core";

export class DisplayNode extends Node {
    type = "Display";
    name = "Value";
    group = "Simple Nodes"

    constructor() {
        super();
        this.addInputInterface("Value");
    }
    public calculate() {
        const v = this.getInterface("Value").value
        this.name = "Value : " + Math.fround(v);
    }
}

