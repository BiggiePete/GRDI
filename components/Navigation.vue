<template>
    <div class="nav">
        <h3>GRDI</h3>
        <button @click="save">Save</button>
        <button @click="load">Load</button>
    </div>
</template>

<style>
.nav {
    display: flex;
    background-color: #222;
}

.nav h3 {
    padding-right: 10px;
    color: lime;
}

button {
    background-color: #333;
    color: lime;
    margin-left: 5px;
    margin-right: 5px;

}
</style>
<script>
export default {
    methods: {
        save() {
            this.$emit('save')
        },
        load() {
            this.$emit('load')
        }
    }
}
</script>