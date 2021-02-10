<template lang="pug">
  .product-data.realization-products
    .title
      span 产品变现效果
      .canvas-type
        .spot(
          style="{ background: '#4161BB' }"
        )
        .day 前天
    #realization-products.canvas-data-container
    .product-canvas-type
      .canvas-type(
          v-for="(item, index) in typeArray" :key="index"
        )
          .spot(
            :style="{ background: colorArray[index] }"
          )
          span {{ item }}
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class RealizationProducts extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['即刻天气', '知心天气', '诸葛天气', '诸葛万年历', '清理管家极速版', '祥云天气', '365天气'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF', '#BF7AFF', '#FF7ACE', '#FF661E', '#56FF8F', '#1B77FF'];

    option = {
      calculable : true,
      grid: {
        x: 10,
        x2: 10,
        y: 0,
        y2: 20,
      },
      xAxis: {
        type: 'category',
        data: ['6/18', '6/19', '6/20', '6/20', '6/22', '6/23', '6/24'],
        // show:false,//不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
        axisTick:{
          show:false//不显示坐标轴刻度线
        },
        axisLine: {
          show: false,//不显示坐标轴线
          lineStyle: {
            color: 'rgba(255,255,255,0.79)',
          }
        },
        axisLabel: {
          fontSize: 9,//字体大小
          // show: false,//不显示坐标轴上的文字
        },
      },
      yAxis: {
        type: 'value',
        // show:false,//不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
        axisLabel: {
          fontSize: 9,//字体大小
          formatter: () => {
            return '';
          }
        },
        axisLine: {       //y轴
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.79)',
          }
        },
        axisTick :{       //y轴刻度线
          show: false,
        },
        splitLine: {     //网格线
          show: true,
          lineStyle:{
            color:'rgba(255,255,255,0.12)',
            type: 'dashed',
            width: 0.5,
          }
        }
      },
      series : [
        {
          type:'bar',
          stack: '效果',
          data:[320, 332, 301, 334, 390, 330, 320],
          // showBackground: true,
          barWidth : 7,//柱图宽度
          itemStyle: {
            normal: {
              barBorderRadius:[10,10,0,0], // 设置顶部圆角
              color: (params: any) => {
                return this.colorArray[params.dataIndex]
              },
            },
          },
        },
        {
          type:'bar',
          stack: '效果',
          data:[120, 132, 101, 134, 90, 230, 210],
          barWidth : 7,//柱图宽度
          itemStyle:{
            barBorderRadius:[10,10,0,0], // 设置顶部圆角
            color: 'rgba(220, 220, 220, 0.2)',
          }
        }
      ]
    };
    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('realization-products'));
      myChart.setOption(this.option);
    }
  }
</script>
