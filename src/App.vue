<template lang="pug">
  #app
    keep-alive
      router-view
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {

    created() {}

    mounted() {}
  }
</script>
<style lang="less">
  @import './style/index.less';
</style>
