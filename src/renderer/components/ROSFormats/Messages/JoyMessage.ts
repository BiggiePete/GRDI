import { colors1 } from "../ColorSheet";
import Header from "../Header";

export default class JoyMessage {
    static __color = colors1[9];
    static type = "Joy"

    header;
    axes;
    buttons;
    constructor(header: Header, axes: number[], buttons: number[]) {

        this.header = header;
        this.axes = axes;
        this.buttons = buttons;
    }
}