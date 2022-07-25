import { Node } from "@baklavajs/core";

export class DisplayNode extends Node {
    type = "DisplayNode";
    name = "Value";

    constructor() {
        super();
        this.addInputInterface("Value","","",{type: "number"});
    }
    public calculate() {
        const v = this.getInterface("Value").value
        this.name = "Value : " + Math.fround(v);
    }
}

