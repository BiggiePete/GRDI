
import CustomNodes from "./CustomNodes.json"

export function NodeHandler(url) {
    const fs = require('fs')
    const file: string = fs.readFileSync(url, { encoding: 'utf8', flag: 'r' })

    const publisherRegExp = /rospy.Publisher/gim
    const subscriberRegExp = /rospy.Subscriber/gim

    const Publishers = Array.from(file.matchAll(publisherRegExp))
    const Subscribers = Array.from(file.matchAll(subscriberRegExp))

    extractParams(false, Publishers[0].index!, file)
}

function extractParams(isSubscriber: boolean, index: number, file: string) {
    var params = {
        isSubscriber: new Boolean(),
        dataType: new String(),
    };
    params.isSubscriber = isSubscriber;
    params.dataType = file.slice(file.indexOf(",", index) + 2, file.indexOf(",", file.indexOf(",", index) + 1))
}

function AppendtoCustomNodes() {

}