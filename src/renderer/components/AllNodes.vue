<template>
    <div class="searchpane">
        <v-treeview :items="folders" class="treeview"></v-treeview>
    </div>
</template>

<script>

export default {
    data() {
        return {
            folders: [
                {
                    name: 'Math',
                    children: [
                        {
                            name: "Arithmatic"
                        },
                        {
                            name: "OtherMath"
                        }
                    ]
                },
                {
                    name: "Sensors",
                    children: [
                        {
                            name: 'Camera',
                            children: [
                                {
                                    name: "RPI Camera"
                                },
                                {
                                    name: "Logitech"
                                },
                                {
                                    name: "ZED",
                                    children: [
                                        {
                                            name: "Mini"
                                        },
                                        {
                                            name: "Zed 2"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Lidar"
                        },
                        {
                            name: "Prox Switch"
                        }
                    ]
                },
                {
                    name: "Strings"
                }
            ],
            input: ""
        }
    },
    created() {

    },
    methods: {
        updateNodeList() {

        }
    }
}
</script>

<style>
.searchpane {
    background: #333;
    font-size: medium;
}

.theme--light.v-icon {
    color: rgba(255, 255, 255, 0.77) !important;
}

.treeview {
    color: white !important;
}

input {
    display: block;
    width: 100%;
    margin: 20px auto;
    padding: 10px 45px;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    color: #f2f2f2;
}

.item {
    width: 350px;
    height: fit-content;
    font-size: medium;
    padding: 5px;
    color: white;
    cursor: pointer;
}

.node {
    height: fit-content;
}

.indent {
    margin-left: 10px;
}

.error {
    background-color: tomato;
    cursor: not-allowed;
}
</style>