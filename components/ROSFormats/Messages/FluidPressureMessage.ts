import { colors } from "../ColorSheet";
import Header from "../Header";

export default class FluidPressureMessage {
    __color = colors[6];

    header;
    fluid_pressure;
    variance;
    constructor(header: Header, fluid_pressure: number, variance: number) {

        this.header = header;
        this.fluid_pressure = fluid_pressure;
        this.variance = variance;
    }
}