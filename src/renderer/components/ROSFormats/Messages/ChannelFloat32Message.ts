import { colors1 } from "../ColorSheet";
export default class ChannelFloat32Message {
    static __color = colors1[4];
    static type = "ChannelFloat32"

    name;
    values;
    constructor(name: string, values: number[]) {
        this.name = name;
        this.values = values;
    }
}