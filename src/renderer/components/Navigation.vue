<template>
    <div class="nav">
        <img src="/logo.png" alt="">
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
    font-family: 'Roboto';
    height: 64px;
}

.nav h3 {
    padding: 10px;
    color: #FEFFFF;
}

button {
    background-color: #222;
    color: #FEFFFF;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 7px;
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