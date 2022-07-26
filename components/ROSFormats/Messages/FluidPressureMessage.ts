import { colors } from "../ColorSheet";
import Header from "../Header";

export default class FluidPressureMessage {
    static __color = colors[6];
    static type = "FluidPressureMessage"
    
    header;
    fluid_pressure;
    variance;
    constructor(header: Header, fluid_pressure: number, variance: number) {

        this.header = header;
        this.fluid_pressure = fluid_pressure;
        this.variance = variance;
    }
}