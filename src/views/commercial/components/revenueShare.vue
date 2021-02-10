<template lang="pug">
  .product-comparison.commercial-sixe
    .title 收益占比
    .comparison-container
      .container-half
        #revenue-share-left.canvas-product-comparison-container
        .date 8月18日占比
        .container-half-type
          .type-container
            .canvas-type(
              v-for="(item, index) in typeArray" :key="index"
            )
              .canvas-type-left
                .spot(
                :style="{ background: colorArray[index] }"
              )
                span {{ item }}
              .percentage 10%
      .container-half
        #revenue-share-right.canvas-product-comparison-container
        .date 8月19日占比
        .container-half-type
          .type-container
            .canvas-type(
              v-for="(item, index) in typeArray" :key="index"
            )
              .canvas-type-left
                .spot(
                :style="{ background: colorArray[index] }"
              )
                span {{ item }}
              .percentage 10%
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class RvenueShare extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['即刻天气', '知心天气', '诸葛天气', '诸葛万年历', '清理管家极速版', '祥云天气', '365天气'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF', '#BF7AFF', '#FF7ACE', '#FF661E', '#56FF8F', '#1B77FF'];

    option = {
      color : this.colorArray,
      series: [{
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        hoverOffset: 0,
        label : {
          normal : {
            position: 'outer',
            formatter: '{d}%',
            textStyle : {
              fontWeight : 'normal',
              fontSize : 10
            },
          }
        },
        labelLine: {
          normal: {
            show: false,
            length: 3,
            length2: 0,
          },
        },
        itemStyle: {
          borderColor: '#0A32A3',
          borderWidth: 1.5,
        },
        data: [{
            value: 3,
            name: '穿山甲',
          },
          {
            value: 2,
            name: '优量汇',
          },
          {
            value: 4,
            name: 'Topmob',
          },
          {
            value: 2,
            name: '百度',
          },
          {
            value: 2,
            name: '快手',
          }
        ]
      }]
    };

    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChartLeft = this.commonEcharts.init(document.getElementById('revenue-share-left'));
      myChartLeft.setOption(this.option);

      const myChartRight = this.commonEcharts.init(document.getElementById('revenue-share-right'));
      myChartRight.setOption(this.option);
    }
  }
</script>
