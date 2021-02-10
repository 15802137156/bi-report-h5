<template lang="pug">
  .advertiser-exposure
    .title 广告位收益占比
    .type-container
        .canvas-type(
          v-for="(item, index) in typeArray" :key="index"
        )
          .spot(
            :style="{ background: colorArray[index] }"
          )
          span {{ item }}
    #adver-space-revenue.canvas-data-container
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class AdverSpaceRevenue extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['开屏', '插屏', '原生', '互动', '其他'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF', '#BF7AFF', '#FF9372', '#F96CD3' ];

    option = {
      color : this.colorArray,
      series: [{
        type: 'pie',
        radius: '60%',
        center: ['65%', '50%'],
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
            length: 5,
            length2: 0,
          },
        },
        itemStyle: {
          borderColor: '#0A32A3',
          borderWidth: 1.5,
        },
        data: [{
            value: 3,
            name: '开屏',
          },
          {
            value: 2,
            name: '插屏',
          },
          {
            value: 4,
            name: '原生',
          },
          {
            value: 2,
            name: '互动',
          },
          {
            value: 2,
            name: '其他',
          }
        ]
      }]
    };

    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('adver-space-revenue'));
      myChart.setOption(this.option);
    }
  }
</script>
