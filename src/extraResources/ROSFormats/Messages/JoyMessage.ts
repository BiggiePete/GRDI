import { colors } from "../ColorSheet";
import Header from "../Header";

export default class JoyMessage {
    static __color = colors[9];
    static type = "JoyMessage"

    header;
    axes;
    buttons;
    constructor(header: Header, axes: number[], buttons: number[]) {

        this.header = header;
        this.axes = axes;
        this.buttons = buttons;
    }
}