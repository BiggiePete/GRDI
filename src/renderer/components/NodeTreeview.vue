<template>
    <div class="searchpane">
        <div data-app>
            <CustomNodeInputDialog></CustomNodeInputDialog>
        </div>
        <v-btn dark dense @click="refresh" style="cursor:pointer;" class="hoverable">
            <v-icon> {{ 'mdi-refresh' }}</v-icon> Refresh Database
        </v-btn>
        <hr />
        <v-treeview v-model="tree" :items="items" class="treeview" itemKey="name" open-on-click dark dense>

            <template v-slot:prepend="{ item, open }">
                <v-icon v-if="item.children">
                    {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                </v-icon>
                <v-icon v-else>
                    {{ 'mdi-function' }}
                </v-icon>
            </template>
            <template v-slot:label="{ item }">
                <a class="nodename" v-on:click="nodeSelected(item)"> &ThickSpace;{{ item.name }}</a>
            </template>
        </v-treeview>
    </div>
</template>

<script>
import { eventBus } from '@/plugins/eventBus'
import { ReadCustomNodes } from '../../extraResources/Nodes/NodeHandler'
import CustomNodeInputDialog from './CustomNodeInputDialog.vue'

export default {
    data() {
        return {
            tree: [],
            items: []
        };
    },
    created() {
        this.refresh();
        eventBus.$on("NewNodeCreated", (e) => {
            this.refresh();
        });
    },
    methods: {
        nodeSelected(item) {
            if (!item.children) {
                eventBus.$emit("NodeRequested", item);
            }
        },
        refresh() {
            const customNodes = ReadCustomNodes();
            this.items = [];
            console.log(customNodes);
            customNodes.forEach((cn) => {
                this.items.push(cn);
            });
        }
    },
    components: { CustomNodeInputDialog }
}
</script>

<style>
.searchpane {
    background: #333;
    font-size: 14px !important;
    overflow-y: scroll;
}

.theme--light.v-icon {
    color: rgba(255, 255, 255, 0.77) !important;
}

.treeview {
    color: white !important;
}

.v-treeview-node__level {
    width: 12px !important;
}

.hoverable {
    max-width: fit-content;
}

.hoverable:hover {
    color: beige;
}

.nodename:hover {
    color: beige;
    cursor: pointer;
}
</style>
