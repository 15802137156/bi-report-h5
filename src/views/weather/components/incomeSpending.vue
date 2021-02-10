<template lang="pug">
  .seven-data
    .title
      .trend 近30日当日收入和当日市场支出
      .source
        .canvas-type(
          v-for="(item, index) in typeArray" :key="index"
        )
          .spot(
            :style="{ background: colorArray[index] }"
          )
          span {{ item }}
    #income-spending.adver-space-ecpm
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class IncomeSpending extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['当日收入', '当日支出'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF' ];

    option = {
       grid: {
        containLabel:true,
        x: 10,
        x2: 10,
        y: 20,
        y2: 10,
      },
      xAxis: {
        data: ['6/18', '6/19', '6/20', '6/20', '6/22', '6/23', '6/24', '6/25'],
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
          axisLabel: {
          fontSize: 9,//字体大小
        },
        axisLine: {       //y轴
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.79)',
          }
        },
        axisTick :{       //y轴刻度线
          show: false
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
      series: [{
        name: '当日收入',
        type: 'bar',
        data: [4400, 3100, 2500, 3590, 1900, 2400, 1880, 3400],
        barWidth : 3,//柱图宽度
        itemStyle: {
          normal: {
            barBorderRadius:[6,6,0,0], // 设置顶部圆角
            color: '#FFE01E',
            label: {
              show: true,//开启显示
              position: 'top',//在上方显示
              textStyle: {//数值样式
                color: '#fff',
                fontSize: 6,
              }
            }
          },
        },
      },{
        name: '当日支出',
        type: 'bar',
        data: [2400, 1100, 4500, 1590, 2900, 4400, 3880, 1400],
        barWidth : 3,//柱图宽度
        itemStyle: {
          normal: {
            barBorderRadius:[6,6,0,0], // 设置顶部圆角
            color: '#12DEFF',
            label: {
              show: true,//开启显示
              position: 'top',//在上方显示
              textStyle: {//数值样式
                color: '#fff',
                fontSize: 6,
              }
            }
          },
        },
      }]
    };

    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('income-spending'));
      myChart.setOption(this.option);
    }
  }
</script>
