<template>
    <div class="searchpane">
        <div data-app>
            <CustomNodeInputDialog></CustomNodeInputDialog>
        </div>
        <v-btn dark dense @click="refresh" style="cursor:pointer;" class="hoverable">
            <v-icon> {{ 'mdi-refresh' }}</v-icon> Refresh Database
        </v-btn>
        <hr>
        <br>
        <v-text-field v-model="search" label="Search" dark dense clearable clear-icon="mdi-close-circle-outline">
            <v-checkbox v-model="caseSensitive" dense dark hide-details label="Case sensitive search"></v-checkbox>
        </v-text-field>
        <v-treeview v-model="tree" :items="items" :search="search" :filter="filter" :open.sync="open" class="treeview"
            itemKey="name" open-on-click dark dense>

            <template v-slot:prepend="{ item, open }">
                <v-icon v-if="item.children">
                    {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                </v-icon>
                <v-icon v-else>
                    {{ 'mdi-function' }}
                </v-icon>
            </template>
            <template v-slot:label="{ item }">
                <v-btn text dense dark class="nodename" v-on:click="nodeSelected(item)"
                    @contextmenu="show($event, item.name)">
                    &ThickSpace;{{ item.name }}
                </v-btn>
            </template>
        </v-treeview>
        <v-menu class="top" v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y dense dark>
            <v-list>
                <v-list-item v-for="menuItem in menuItems" :key="menuItem" @click="menuItemSelected(menuItem)">
                    <v-list-item-title>
                        {{ menuItem }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import { eventBus } from '@/plugins/eventBus'
import { ReadCustomNodes, RemoveNode } from '../../extraResources/Nodes/NodeHandler'
import CustomNodeInputDialog from './CustomNodeInputDialog.vue'

export default {
    data() {
        return {
            tree: [],
            items: [],
            search: null,
            caseSensitive: false,
            selectedNode: null,
            showMenu: false,
            x: 0,
            y: 0,
            menuItems: ["Remove", "Rename"]
        };
    },
    created() {
        this.refresh();
        eventBus.$on("NewNodeCreated", (e) => {
            this.refresh()
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
            eventBus.$emit("Refresh", "")
        },
        menuItemSelected(e) {
            switch (e) {
                case "Remove":
                    console.log(this.selectedNode)
                    console.log(RemoveNode(this.selectedNode))
                    this.refresh()
                    break;
                case "Rename":
                    alert("Not Implemented Yet!")
                    break
                default:
                    break;
            }
        },
        show(e, nodeName) {
            this.selectedNode = nodeName;
            console.log(e)
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        computed: {
            filter() {
                return this.caseSensitive
                    ? (item, search, textKey) => item[textKey].includes(search)
                    : undefined;
            }
        },
    },
    components: { CustomNodeInputDialog }
}
</script>

<style>
.top {
    z-index: 100 !important;
}

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
    width: 100% !important;
}

.hoverable:hover {
    color: beige;
}

.nodename:hover {
    color: beige;
    cursor: pointer;
}
</style>
