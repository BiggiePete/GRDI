<template>
    <div class="cnb">
        <h1 class="title">
            Custom Node Builder
        </h1>
        <v-file-input accept=".py" label="Input ROS python File" color="white" counter show-size dense dark
            v-model="file" ref="FileInput" clearable>
        </v-file-input>
        <v-text-field style="width:80%;margin-left: 10%;" label="Node Group" placeholder="/Input/Camera" dense dark
            v-model="group" ref="TextInput" clearable>
        </v-text-field>
        <v-btn dense dark @click="Submit">Add Node</v-btn>
        <div data-app>
            <CustomNodeInputDialog></CustomNodeInputDialog>
        </div>
    </div>
</template>

<script>

import { AddCustomNodes } from "../../extraResources/Nodes/NodeHandler.ts";
import { eventBus } from "~/plugins/eventBus";
import CustomNodeInputDialog from "./CustomNodeInputDialog.vue";
export default {
    data() {
        return {
            file,
            group,
        };
    },
    methods: {
        Submit() {
            if (this.file != null) {
                AddCustomNodes(this.file.path, this.group);
                eventBus.$emit("NewNodeCreated");
                //clear inputs
                this.$refs.FileInput.clearableCallback();
                this.$refs.TextInput.clearableCallback();
            }
        }
    },
    components: { CustomNodeInputDialog }
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
