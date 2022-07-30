<template>
  <div class="screen">
    <div class="center">
      <node-editor v-bind:style="StyleObject"></node-editor>
    </div>
  </div>
</template>

<script>
import NodeEditor from '~/components/NodeEditor.vue';

export default {
  name: "DefaultLayout",
  components: { NodeEditor },
  methods: {
    computeEditorSize() {
    }
  },
  data: {
    styleObject: {
      TopOffset: "10px",
      BottomOffset: "10px",
      LeftOffset: "10px",
      RightOffset: "10px",
    }
  },


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
