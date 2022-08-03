<template>
    <div class="searchpane">
        <v-slot @click="refresh" style="cursor:pointer;">
            <v-icon> {{ 'mdi-refresh' }}</v-icon> Refresh Database
        </v-slot>
        <v-treeview v-model="tree" :items="items" class="treeview" itemKey="name" open-on-click>

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

export default {
    data() {
        return {
            tree: [],
            items: [],
        }
    },
    created() {
    },
    methods: {
        nodeSelected(item) {
            if (!item.children) {
                eventBus.$emit("NodeRequested", item.name)
            }
        },
        refresh() {

        }
    }
}
</script>

<style>
.searchpane {
    background: #333;
    font-size: 14px !important;
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


.nodename:hover {
    color: beige;
    cursor: pointer;
}
</style>