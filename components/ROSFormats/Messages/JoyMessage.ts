import { colors } from "../ColorSheet";

export default class JoyMessage {
    __color = colors[8];

    header;
    axes;
    buttons;
    constructor(header: Headers, axes: number[], buttons: number[]) {

        this.header = header;
        this.axes = axes;
        this.buttons = buttons;
    }
}