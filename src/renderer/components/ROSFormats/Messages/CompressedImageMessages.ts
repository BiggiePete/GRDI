import { colors1 } from "../ColorSheet";
import Header from "../Header";

export default class CompressedImageMessage {
    static __color = colors1[5];
    static type = "CompressedImage"


    header;
    format;
    data;
    constructor(header: Header, format: string, data: number[]) {
        this.header = header;
        this.format = format;
        this.data = data;
    }
}