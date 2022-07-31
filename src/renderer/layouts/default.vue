<template>
    <div class="screen">
        <link rel="stylesheet" href="/Styles/splitpanes.css">
        <splitpanes class="default-theme" :push-other-panes="false">
            <pane id="LeftPanel" size="20">
                Left Panel
            </pane>
            <pane>
                <splitpanes :push-other-panes="false" horizontal>
                    <pane id="TopPanel" max-size="8">
                        Top Panel
                    </pane>
                    <pane id="EditorPanel" size="82">
                        <node-editor id="editor"></node-editor>
                    </pane>
                    <pane id="BottomPanel">
                        Bottom Panel
                    </pane>
                </splitpanes>
            </pane>
            <pane id="RightPanel" size="20">
                Right Panel
            </pane>
        </splitpanes>
    </div>
</template>

<script>
import NodeEditor from '@/components/NodeEditor.vue';
import { Splitpanes, Pane } from 'splitpanes'

export default {
    name: "DefaultLayout",
    data: () => ({
        editorSize: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        },
        LeftPane: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        },
        RightPane: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        },
        BottomPane: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        }
    }),
    created() {
    },
    methods: {
    },
    computed: {
    },
    components: {
        NodeEditor,
        Splitpanes,
        Pane
    },


}
</script>

<style lang="scss">
body {
    margin: 0 !important;
}

.screen {
    width: 100vw;
    height: 100vh;
}

.center {
    width: 50vw;
    height: 100vh;
}

#editor {
    width: 100%;
    height: 100%;
}

.splitpanes__pane {
    box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
}

em.specs {
    font-size: 0.2em;
    line-height: 1;
    position: absolute;
    color: #bbb;
    bottom: 0.5em;
    left: 0;
    right: 0;
    text-align: center;
}

.splitpanes--vertical>.splitpanes__splitter {
    max-width: 4px;
    background: #f2f2f2;
}

.splitpanes--horizontal>.splitpanes__splitter {
    max-height: 4px;
    background: #f2f2f2;
}

// GENERAL STYLES.
html,
body,
#app {
    height: 100%;
    margin: 0;
}

body {
    font-family: Helvetica, Arial, sans-serif;
    color: rgba(255, 255, 255, 0.6);
    font-size: 5em;
}
</style>

