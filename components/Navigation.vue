<template>
    <div class="nav">
        <img src="/GRDILOGO.jpg" alt="" style="max-height:5vh">
        <button @click="save">Save</button>
        <button @click="load">Load</button>
        <button @click="loadrecent">Load Recent</button>
    </div>
</template>

<style>
.nav {
    display: flex;
    background-color: #3A3E44;
    z-index: 2;
    width: 100%;
    height: fit-content;
}

.nav h3 {
    padding: 10px;
    color: lime;
}

button {
    background-color: #222;
    color: lime;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 1.5vh;
    width: fit-content;
    height: fit-content;
}

button:hover {
    background-color: #555;
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
        },
        loadrecent(){
            this.$emit('loadrecent')
        }
    }
}
</script>