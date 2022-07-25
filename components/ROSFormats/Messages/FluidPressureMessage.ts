import ColorSheet from "../ColorSheet";
import Header from "../Header";

export default class FluidPressureMessage {
    __color = ColorSheet.colors[6];

    header;
    fluid_pressure;
    variance;
    constructor(header: Header, fluid_pressure: number, variance: number) {

        this.header = header;
        this.fluid_pressure = fluid_pressure;
        this.variance = variance;
    }
}