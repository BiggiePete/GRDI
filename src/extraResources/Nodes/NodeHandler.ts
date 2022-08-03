
import CustomNodes from "./CustomNodes.json"

export function NodeHandler(url) {
    const fs = require('fs')
    const file: string = fs.readFileSync(url, { encoding: 'utf8', flag: 'r' })
    const publisherRegExp = /rospy.Publisher/gim
    const subscriberRegExp = /rospy.Subscriber/gim
    Array.from(file.matchAll(publisherRegExp))
    Array.from(file.matchAll(subscriberRegExp))
}

function AppendtoCustomNodes() {

}