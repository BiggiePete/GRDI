<template>
    <div class="screen">
        <vue-tabs centered>
            <v-tab title="Design">
                <link rel="stylesheet" href="/Styles/splitpanes.css">
                <splitpanes class="default-theme" :push-other-panes="false">
                    <pane id="LeftPanel" size="20">
                        <node-treeview class="fullscreen"></node-treeview>
                    </pane>
                    <pane>
                        <splitpanes :push-other-panes="false" horizontal>
                            <pane id="TopPanel" max-size="8">
                                Top Panel
                            </pane>
                            <pane id="EditorPanel" size="82">
                                <node-editor id="editor" class="fullscreen"></node-editor>
                            </pane>
                            <pane id="BottomPanel">
                                <terminal></terminal>
                            </pane>
                        </splitpanes>
                    </pane>
                    <!--pane id="RightPanel" size="20">
                        <custom-node-gen class="fullscreen"></custom-node-gen>
                    </pane-->
                </splitpanes>
            </v-tab>
            <v-tab title="Create">
                <splitpanes class="default-theme" :push-other-panes="false">
                    <pane size="30">
                        <p>This portion (Create) of GRDI is still under development!</p>
                    </pane>
                    <pane>
                        <u-r-d-f-builder></u-r-d-f-builder>
                    </pane>
                </splitpanes>
            </v-tab>

            <v-tab title="Test">
                <p>This portion (Test) of GRDI is still under development!</p>
            </v-tab>
        </vue-tabs>
    </div>
</template>

<script>
import NodeEditor from '@/components/NodeEditor.vue';
import { Splitpanes, Pane } from 'splitpanes'
import NodeTreeview from '@/components/NodeTreeview.vue';
import Terminal from '@/components/Terminal.vue'
import URDFBuilder from '~/components/URDFBuilder.vue';

export default {
    name: "DefaultLayout",
    data: () => ({
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
        Pane,
        NodeTreeview,
        Terminal,
        URDFBuilder
    },


}
</script>

<style lang="scss">
@import '../../../node_modules/vue-nav-tabs/themes/vue-tabs.css';

.tab-content {
    height: 100% !important;
}

.vue-tabs {
    height: 100% !important;
}

.tab-container {
    height: 100% !important;
}

.title {
    font-size: 16px;
    text-align: center;
}

body {
    margin: 0 !important;
}

.screen {
    width: 100vw;
    height: calc(100vh - 44.84px);
}

.center {
    width: 50vw;
    height: 100vh;
}

.fullscreen {
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

