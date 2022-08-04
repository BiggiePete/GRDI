


export function ReadCustomNodes() {
    const fs = require('fs');
    return JSON.parse(fs.readFileSync("./resources/Nodes/CustomNodes.json"));
}


export function AddCustomNodes(url: string) {
    const fs = require('fs')

    //check to make sure there are no duplucates
    const CustomNodes = JSON.parse(fs.readFileSync("./resources/Nodes/CustomNodes.json"))

    if (url.includes("\\")) {
        var fileName = url.slice(url.lastIndexOf("\\") + 1, url.lastIndexOf("."))
    } else {
        var fileName = url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."))
    }

    CustomNodes.forEach(cn => {
        if (fileName == cn.name){
            console.warn("A node with this Name already exists!")
            return;
        }
    });

    //if none, populate all of the information pertaining to the node
    const file: string = fs.readFileSync(url, { encoding: 'utf8', flag: 'r' })

    const publisherRegExp = /rospy.Publisher/gim
    const subscriberRegExp = /rospy.Subscriber/gim

    const Publishers = Array.from(file.matchAll(publisherRegExp))
    const Subscribers = Array.from(file.matchAll(subscriberRegExp))


    //create the node datatype : 
    var nodeParams = {
        name: "",
        inputs: new Array(),
        outputs: new Array(),
    }
    nodeParams.name = fileName
    Publishers.forEach(pub => {
        nodeParams.outputs.push(extractParams(false, pub.index, file))
    });
    Subscribers.forEach(sub => {
        nodeParams.inputs.push(extractParams(true, sub.index, file))
    });
    AppendtoCustomNodes(nodeParams)
}

function extractParams(isSubscriber: boolean, index: number | undefined, file: string) {
    if (index == undefined) {
        return {};
    }
    var params = {
        isInput: isSubscriber,
        dataType: "",
    };
    params.isInput = isSubscriber;
    params.dataType = file.slice(file.indexOf(",", index) + 2, file.indexOf(",", file.indexOf(",", index) + 1))

    return params
}

function AppendtoCustomNodes(Node) {
    const fs = require('fs')
    try {
        var CustomNodes = fs.readFileSync("./resources/Nodes/CustomNodes.json")
        CustomNodes = JSON.parse(CustomNodes)
    } catch (error) {
        console.warn(error)
    }
    CustomNodes.push(Node);
    console.log(CustomNodes)
    fs.writeFile("./resources/Nodes/CustomNodes.json", JSON.stringify(CustomNodes), (err) => { console.warn(err); console.log("file written") })
}