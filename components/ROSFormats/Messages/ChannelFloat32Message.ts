import ColorSheet from "../ColorSheet";
export default class ChannelFloat32Message {
    __color = ColorSheet.colors[4];


    name;
    values;
    constructor(name: string, values: number[]) {
        this.name = name;
        this.values = values;
    }
}