<template>
    <div class="screen">
        <div class="center">
            <node-editor id="editor"></node-editor>
        </div>
    </div>
</template>

<script>
import NodeEditor from '~/components/NodeEditor.vue';

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
    components: { NodeEditor },


}
</script>

<style>
body {
    margin: 0 !important;
}

.screen {
    position: relative;
    display: flex;
}
.center{
    width: 50vw;
    height: 100vh;
}
#editor{
    width: inherit;
    height: inherit;
}
</style>
