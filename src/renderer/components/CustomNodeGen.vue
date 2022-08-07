<template>
    <div class="cnb">
        <h1 class="title">
            Custom Node Builder
        </h1>
        <v-file-input accept=".py" label="Input ROS python File" color="white" @change="LoadFile"
        counter
        show-size
        dense
        dark
        ></v-file-input>
    </div>
</template>

<script>
import { AddCustomNodes } from "../../extraResources/Nodes/NodeHandler.ts";
import { eventBus } from "~/plugins/eventBus";
export default {
    data() {
        return {

        }
    },
    methods: {
        LoadFile(file) {
            if (file != null) {
                AddCustomNodes(file.path)
                eventBus.$emit("NewNodeCreated")
            }
        }
    }
}
</script>
<style>
.title {
    font-size: 16px;
    text-align: center;
}

.cnb {
    width: 100%;
    height: 100%;
    background: #333;
}

.theme--light.v-label {
    color: white !important;
}
</style>
