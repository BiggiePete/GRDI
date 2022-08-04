<template>
    <div>
        <div id="Terminal">

        </div>
    </div>
</template>

<script>
const {Terminal} = require('xterm')
const os = require('os')
const pty = require('node-pty')

export default {
    created() {
        var term = new Terminal();
        term.open(document.getElementById("Terminal"))
    }
}
</script>

<style>
#Terminal {
    width: 100%;
    height: 100%;
}
</style>