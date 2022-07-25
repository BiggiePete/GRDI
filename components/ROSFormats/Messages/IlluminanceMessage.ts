import ColorSheet from "../ColorSheet";
import Header from "../Header";

export default class IlluminanceMessage {
    __color = ColorSheet.colors[6];


    header;
    illuminance;
    variance;
    constructor(header: Header, illuminance: number, variance: number) {

        this.header = header
        this.illuminance = illuminance
        this.variance = variance
    }
}