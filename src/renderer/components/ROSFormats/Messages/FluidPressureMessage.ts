import { colors1 } from "../ColorSheet";
import Header from "../Header";

export default class FluidPressureMessage {
    static __color = colors1[6];
    static type = "FluidPressure"
    
    header;
    fluid_pressure;
    variance;
    constructor(header: Header, fluid_pressure: number, variance: number) {

        this.header = header;
        this.fluid_pressure = fluid_pressure;
        this.variance = variance;
    }
}