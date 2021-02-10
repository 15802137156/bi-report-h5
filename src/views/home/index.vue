<template lang="pug">
  .home-page
    .title H5商业化管理简报
    
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Index extends Vue {

    created() {}

    mounted() {}
  }
</script>

<style lang="less" scoped>
  .home-page {
    .title {
      width: 100%;
      text-align: center;
      padding: 30px;
      font-size: 30px;
    }
  }
</style>
