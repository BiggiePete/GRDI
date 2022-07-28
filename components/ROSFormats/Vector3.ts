export default class Vector3 {
    static type = "Vector3"
    static __color = "#0EB5BD"

    x;
    y;
    z;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}