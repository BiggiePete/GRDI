import { colors } from "../ColorSheet";
export default class JointStateMessage {
    static __color = colors[8]
    static type = "JointStateMessage"


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