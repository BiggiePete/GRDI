export default class JoyMessage {
    header;
    axes;
    buttons;
    constructor(header: Headers, axes: number[], buttons: number[]) {

        this.header = header;
        this.axes = axes;
        this.buttons = buttons;
    }
}