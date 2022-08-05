import { colors1 } from "../ColorSheet";

export default class JoyFeedbackMessage {
    static __color = colors1[11];
    static type = "JoyFeedback"

    static TYPE_LED = 0
    static TYPE_RUMBLE = 1
    static TYPE_BUZZER = 2

    type;
    id;
    intensity;
    constructor(type: number, id: number, intensity: number) {
        this.type = type;
        this.id = id;
        this.intensity = intensity;
    }

}