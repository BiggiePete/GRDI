<template>
  <div>
    <pages></pages>
  </div>
</template>

<script>
import Pages from '~/pages/index.vue';

export default {
    name: "DefaultLayout",
    components: { Pages }
}
</script>

<style>
body {
  margin: 0 !important;
}
</style>
