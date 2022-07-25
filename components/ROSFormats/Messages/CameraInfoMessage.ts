import Header from "../Header";
import RegionOfInterestMessage from "./RegionOfInterestMessage";
import {colors} from "../ColorSheet";

export default class CameraInfoMessage {
    __color = colors[3];


    header;
    height;
    width;
    distortion_model;
    D;
    K;
    R;
    P;
    binning_x;
    binning_y;
    roi;


    constructor(header: Header, height: number, width: number, distortion_model: string, D: number[], K: number[], R: number[], P: number[], binning_x: number, binning_y: number, roi: RegionOfInterestMessage) {
        this.header = header;
        this.height = height;
        this.width = width;
        this.distortion_model = distortion_model;
        this.D = D;
        this.K = K;
        this.R = R;
        this.P = P;
        this.binning_x = binning_x;
        this.binning_y = binning_y;
        this.roi = roi;
        this.__color = colors[3];
    }
}