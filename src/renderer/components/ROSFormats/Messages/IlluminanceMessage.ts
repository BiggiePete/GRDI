import { colors } from "../ColorSheet";
import Header from "../Header";

export default class IlluminanceMessage {
    static __color = colors[10];
    static type = "IlluminanceMessage"

    header;
    illuminance;
    variance;
    constructor(header: Header, illuminance: number, variance: number) {

        this.header = header
        this.illuminance = illuminance
        this.variance = variance
    }
}