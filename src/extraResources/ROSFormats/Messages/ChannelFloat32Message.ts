import { colors } from "../ColorSheet";
export default class ChannelFloat32Message {
    static __color = colors[4];
    static type = "ChannelFloat32Message"

    name;
    values;
    constructor(name: string, values: number[]) {
        this.name = name;
        this.values = values;
    }
}