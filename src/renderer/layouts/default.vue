<template>
    <div class="screen">
        <div class="center">
            <node-editor id="editor" v-bind:style="{
                top: computeEditorSize.y,
                left: computeEditorSize.x,
                width: computeEditorSize.w,
                height: computeEditorSize.h,
            }"></node-editor>
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
        }
    }),
    created() {
        window.addEventListener("resize", this.windowResize);

    },
    methods: {
        windowResize(){
            this.changeEditorSize(0,0,window.innerWidth,window.innerHeight)
        },
        changeEditorSize(x, y, w, h) {
            this.editorSize.x = x + "px"
            this.editorSize.y = y + "px"
            this.editorSize.w = w + "px"
            this.editorSize.h = h + "px"
        }
    },
    computed: {
        computeEditorSize(){
            return this.editorSize
        }
    },
    components: { NodeEditor },


}
</script>

<style>
body {
    margin: 0 !important;
}

.screen {
    position: absolute;
}
</style>
