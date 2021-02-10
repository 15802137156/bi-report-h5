<template lang="pug">
  .seven-data
    .title
      .trend 7天数据趋势
      .source
        .canvas-type(
          v-for="(item, index) in typeArray" :key="index"
        )
          .spot(
            :style="{ background: colorArray[index] }"
          )
          span {{ item }}
    #seven-data.adver-space-ecpm
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class SevenData extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['收益', 'Ecpm'];
    colorArray:Array<string> =[ '#12DEFF', '#FF9372' ];

    option = {
       grid: {
        containLabel:true,
        x: 10,
        x2: 10,
        y: 20,
        y2: 10,
      },
      xAxis: {
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
      yAxis: [
      {
        type: 'value',
        // min: 0,
        // max: 50,
        // interval: 10,
        // name: '收益',
        splitNumber: 4, // Y轴均分
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
          show: false,
        }
      },
      {
        type: 'value',
        // name: 'Ecpm',
        // min: 0,
        // max: 16,
        // interval: 4,
        splitNumber: 4, // Y轴均分
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
          show: true,
          lineStyle:{
            color:'rgba(255,255,255,0.12)',
            type: 'dashed',
            width: 0.5,
          }
        }
      },
      ],
      series: [{
        name: '收益',
        type: 'bar',
        data: [1014, 1204, 1104, 1004, 1104, 1024, 1064],
        barWidth : 7,//柱图宽度
        itemStyle: {
          normal: {
            barBorderRadius:[10,10,0,0], // 设置顶部圆角
            color: '#12DEFF',
          },
        },
      }, {
        name: 'Ecpm',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol:'circle',    //设定为实心点  emptyCircle
        symbolSize: 5,   //设定实心点的大小
        itemStyle: {
          normal: {
            //圆圈颜色
            color: '#FF9372',
            label : {
              show: true,  // 显示数量
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
          color: '#FF9372',
        },
        data: [10, 12, 12, 10, 10, 11, 9]
      }]
    };

    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('seven-data'));
      myChart.setOption(this.option);
    }
  }
</script>
