import Time from "./Time";
export default class Header {
    seq;
    stamp;
    frame_id;
    constructor(seq: number, stamp: Time, frame_id: string) {
        this.seq = seq;
        this.stamp = stamp;
        this.frame_id = frame_id;
    }
}