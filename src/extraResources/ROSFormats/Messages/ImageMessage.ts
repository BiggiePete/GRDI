import Header from "../Header"
import { colors } from "../ColorSheet";
export default class ImageMessage {
    static __color = colors[1];
    static type = "ImageMessage";

    header;
    height;
    width;
    encoding;
    is_bigendian;
    step;
    data;
    constructor(header: Header, height: number, width: number, encoding: string, is_bigendian: number, step: number, data: number[]) {
        this.header = header;
        this.height = height;
        this.width = width;
        this.encoding = encoding;
        this.is_bigendian = is_bigendian;
        this.step = step;
        this.data = data;
        
    }
}