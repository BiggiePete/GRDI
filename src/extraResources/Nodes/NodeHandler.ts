
import snappy from "snappy"
export const customNodesDir = "./resources/Nodes/CustomNodes.json"
export function ReadCustomNodes() {
    const fs = require('fs');
    return JSON.parse(fs.readFileSync(customNodesDir));
}


export function AddCustomNodes(url: string) {
    const fs = require('fs')

    //check to make sure there are no duplucates
    const CustomNodes = JSON.parse(fs.readFileSync(customNodesDir))

    if (url.includes("\\")) {
        var fileName = url.slice(url.lastIndexOf("\\") + 1, url.lastIndexOf("."))
    } else {
        var fileName = url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."))
    }

    CustomNodes.forEach(cn => {
        if (fileName == cn.name) {
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
        CompressedPython: Compress(file)
    }
    nodeParams.name = fileName
    Publishers.forEach(pub => {
        nodeParams.outputs.push(extractParams(pub.index, file))
    });
    Subscribers.forEach(sub => {
        nodeParams.inputs.push(extractParams(sub.index, file))
    });
    AppendtoCustomNodes(nodeParams)
}

function extractParams(index: number | undefined, file: string) {
    if (index == undefined) {
        return {};
    }
    var params = {
        dataType: "",
    };
    params.dataType = file.slice(file.indexOf(",", index) + 2, file.indexOf(",", file.indexOf(",", index) + 1))

    if (params.dataType.includes(".")) {
        params.dataType = params.dataType.slice(params.dataType.lastIndexOf(".") + 1, params.dataType.length)
    }

    return params
}

function AppendtoCustomNodes(Node) {
    const fs = require('fs')
    try {
        var CustomNodes = fs.readFileSync(customNodesDir)
        CustomNodes = JSON.parse(CustomNodes)
    } catch (error) {
        console.warn(error)
    }
    CustomNodes.push(Node);
    console.log(CustomNodes)
    fs.writeFile(customNodesDir, JSON.stringify(CustomNodes), (err) => { console.warn(err); console.log("file written") })
}

function Compress(file) {
    return snappy.compressSync(file)
}

function UncompressExtract(data) {
    const d = snappy.uncompressSync(data)
}
