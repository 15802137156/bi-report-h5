<template lang="pug">
  .seven-data
    .title
      .trend 预估LTV90和预估ROI90
      .source
        .canvas-type(
          v-for="(item, index) in typeArray" :key="index"
        )
          .spot(
            :style="{ background: colorArray[index] }"
          )
          span {{ item }}
    #forecast-ninety.adver-space-ecpm
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class ForecastNinety extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['LTV90', 'ROI90'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF'];

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
      yAxis: [
      {
        type: 'value',
        // min: 0,
        // max: 50,
        // interval: 10,
        // name: 'LTV90',
        axisLabel: {
          formatter: '{value}%',
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
      {
        type: 'value',
        // name: 'ROI90',
        // min: 0,
        // max: 16,
        // interval: 4,
        // show:false,//不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
        axisLabel: {
          fontSize: 9,//字体大小
          // formatter: '{value}',
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
          // show: true,
          // lineStyle:{
          //   color:'rgba(255,255,255,0.12)',
          //   type: 'dashed',
          //   width: 0.5,
          // }
        }
      },
      ],
      series: [{
        name: 'ROI90',
        type: 'line',
        // yAxisIndex: 1, // 按照2个Y轴
        smooth: true,
        symbol:'circle',    //设定为实心点  emptyCircle
        symbolSize: 5,   //设定实心点的大小
        data: [20, 32, 32, 30, 30, 33, 31, 35],
        itemStyle: {
          normal: {
            //圆圈颜色
            color: '#FFE01E',
            label : {
              show: true,  // 显示数量
              formatter: '{c}%',
              position: 'top',//在上方显示
              textStyle: {//数值样式
                color: 'rgba(255,255,255,0.79)',
                fontSize: 9,
              }
            }
          },
        },
        lineStyle: {//线条样式
          width:1.5,
          color: '#FFE01E',
        },
      }, {
        name: 'LTV90',
        type: 'bar',
        data: [5, 12, 16, 8, 15, 10, 13, 12],
        barWidth : 3,//柱图宽度
        itemStyle: {
          normal: {
            barBorderRadius:[3,3,0,0], // 设置顶部圆角
            color: '#12DEFF',
            label : {
              show: true,  // 显示数量
              formatter: '{c}%',
              position: 'top',//在上方显示
              textStyle: {//数值样式
                color: 'rgba(255,255,255,0.79)',
                fontSize: 9,
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
      const myChart = this.commonEcharts.init(document.getElementById('forecast-ninety'));
      myChart.setOption(this.option);
    }
  }
</script>
