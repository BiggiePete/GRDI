<template>
    <div>
        <input type="text" v-model="input" placeholder="Search Nodes " />
        <div class="item node" v-for="node in filteredList()" :key="node">
            <p class="fa-solid fa-caret-right">{{ node.name }}</p>
        </div>
        <div class="item error" v-if="input && !filteredList().length">
            <p>No Results!</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: []
        }
    },
    methods: {
        // filteredList() {
        //     return nodes.filter((node) => {
        //         let input = ref("");
        //         node.toLowerCase().includes(input.value.toLowerCase())
        //     });
        }
    }
</script>

<style>
input {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 10px 45px;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
    width: 350px;
    margin: 0 auto 10px auto;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.fruit {
    background-color: rgb(97, 62, 252);
    cursor: pointer;
}

.error {
    background-color: tomato;
}
</style>