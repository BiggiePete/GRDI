<template>
    <div id="wrapper">
        <div id="xTerminal">

        </div>
    </div>
</template>

<script>
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit"
import "xterm/lib/xterm.js";
export default {
    data() {
        return {
            term: new Terminal()
        };
    },
    mounted() {
        this.initXTerm()
    },
    methods: {
        initXTerm() {
            const fitAddon = new FitAddon()


            this.term = new Terminal({
                rendererType: "canvas", //type of rendering
                rows: 35, // number of rows
                convertEol: true, // enabled, the cursor is set to the beginning of the next line
                scrollback: 10, // rollback amount of the terminal
                disableStdin: false, // whether to disable input
                cursorStyle: "block", // Cursor Style
                cursorBlink: true, // cursor blinks
                theme: {
                    foreground: "yellow", // font
                    background: "#060101", // Background color
                    cursor: "help" // Set the cursor
                }
            });
            this.term.loadAddon(fitAddon)
            this.term.open(document.getElementById("xTerminal"))
            fitAddon.fit()

            this.term.writeln("Welcome to GRDI!")
            this.term.writeln("This will soon be a custom terminal! giving you feedback on what is going on inside of GRDI, it is currently under HEAVY development!")
            this.term.writeln("")
            this.term.writeln("Add a Python file that contains ROS code on the right pane, and then click refresh database on the left to check for new nodes!")

            this.term.onData((key) => {
                this.term.write(key)
            })
            document.getElementById("BottomPanel").addEventListener('resize', (e) => { resizeHandler() })

            function resizeHandler() {
                fitAddon.fit()
            }
        }
    }
}

</script>

<style>
@import "../../../node_modules/xterm/css/xterm.css";

#xTerminal {
    width: 100%;
    height: 100%;
}

#wrapper {
    height: 100%;
    width: 100%;
}
</style>