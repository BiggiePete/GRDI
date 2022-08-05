import { colors2 } from "../ColorSheet";
import { messageNames } from "../AllMessageNames";

export const nodeNameColorDict = () => {
    let data: any = []
    for (let i = 0; i < messageNames.length; i++) {
        data[i] = {
            name: messageNames[i],
            color: colors2[i]
        }
    }
    return data;
}