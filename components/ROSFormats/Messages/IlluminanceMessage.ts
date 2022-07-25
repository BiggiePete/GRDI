import { colors } from "../ColorSheet";
import Header from "../Header";

export default class IlluminanceMessage {
    __color = colors[6];


    header;
    illuminance;
    variance;
    constructor(header: Header, illuminance: number, variance: number) {

        this.header = header
        this.illuminance = illuminance
        this.variance = variance
    }
}