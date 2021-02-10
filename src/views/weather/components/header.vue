<template lang="pug">
  .header
    .header-title
      span 应用工具事业部
      .arrow(
        @click="dropDown"
      )
      .select-content(
        v-if="arrowSwitch"
      )
        .triangle
        .genre(
          v-for="(item, index) in genreArray" :key="index"
          :class="{'first': index === 0}"
          @click="genreType(index)"
        ) {{ item }}
    .options
      .options-type(
        v-for="(item, index) in optionsArray" :key="index"
        :class="{'active': isActive === index}"
        @click="optionsType(index)"
      ) {{ item }}
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class RetentionCurve extends Vue {

    genreArray:Array<string> = ['应用工具事业部', '增长攻坚中心']

    optionsArray:Array<string> = ['天气', '日历', '清理']

    isActive: number = 0

    arrowSwitch: boolean = false

    created() {}

    mounted() {}

    optionsType(index: number) {
      this.isActive = index
      this.$emit('listenChild', index)
    }

    dropDown() {
      this.arrowSwitch = !this.arrowSwitch
    }

    genreType(index: number) {
      console.log('应用工具事业部', index)
      this.dropDown()
    }

  }
</script>
