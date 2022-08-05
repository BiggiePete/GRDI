import { colors1 } from "../ColorSheet";
export default class JointStateMessage {
    static __color = colors1[8]
    static type = "JointState"


    name;
    position;
    velocity;
    effort;
    constructor(name: string[], position: number[], velocity: number[], effort: number[]) {
        this.name = name;
        this.position = position;
        this.velocity = velocity;
        this.effort = effort;
    }
}