export default class JointStateMessage{
    name;
    position;
    velocity;
    effort;
    constructor(name:string[],position:number[],velocity:number[],effort:number[]){
        this.name = name;
        this.position = position;
        this.velocity = velocity;
        this.effort = effort;
    }
}