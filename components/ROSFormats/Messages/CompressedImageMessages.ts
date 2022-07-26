import { colors } from "../ColorSheet";
import Header from "../Header";

export default class CompressedImageMessage {
    static __color = colors[5];
    static type = "CompressedImageMessage"


    header;
    format;
    data;
    constructor(header: Header, format: string, data: number[]) {
        this.header = header;
        this.format = format;
        this.data = data;
    }
}