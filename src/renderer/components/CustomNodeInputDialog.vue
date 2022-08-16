<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500" transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                    <v-icon>{{ 'mdi-plus-thick' }}</v-icon> Add Node
                </v-btn>
            </template>

            <v-card dense dark>
                <v-card-title class="text-h5 grey lighten-2">
                    Add a New Node
                </v-card-title>
                <br>

                <v-file-input style="width:80%; margin-left: 10%;" accept=".py" label="Input ROS python File"
                    color="white" counter show-size dense dark v-model="file" ref="FileInput" clearable>
                </v-file-input>
                <!--v-overflow-btn dark dense :items="dirs" v-model="group" label="Select Node Group" editable
                    item-value="text" ref="GroupInput" hint="Select Folder Group" style="width:80%; margin-left: 10%;">
                </v-overflow-btn-->

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="Submit">
                        Add Node
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { AddCustomNodes } from "../../extraResources/Nodes/NodeHandler.ts";
import { eventBus } from "~/plugins/eventBus";
import { getGroups } from "../../extraResources/Nodes/NodeHandler.ts"
export default {
    data() {
        return {
            dialog: false,
            file,
            group: "",
            dirs: [],
        }
    },
    mounted() {
        eventBus.$on("Refresh", () => { this.Refresh() })
    },
    methods: {
        Submit() {
            console.log(this.group)
            if (this.file.path != null || this.file.path != "" || this.file.path != undefined) {
                AddCustomNodes(this.file.path, this.group);
                eventBus.$emit("NewNodeCreated");

                //clear inputs
                this.$refs.FileInput.clearableCallback();
                //this.$refs.GroupInput.clearableCallback();
                this.dialog = false
            }
        },
        Refresh() {
        }
    }
}
</script>

<style>
</style>
