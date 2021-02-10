<template lang="pug">
  .seven-data
    .title
      .trend 广告位Ecpm
      .source
        .canvas-type(
          v-for="(item, index) in typeArray" :key="index"
        )
          .spot(
            :style="{ background: colorArray[index] }"
          )
          span {{ item }}
    #adver-space-ecpm.adver-space-ecpm
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class AdverSpaceEcpm extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['开屏', '插屏', '其他', '原生', '互动'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF', '#BF7AFF', '#FF9372', '#F96CD3' ];

    option = {
      grid: {
        containLabel:true,
        x: 10,
        x2: 10,
        y: 20,
        y2: 10,
      },
      xAxis: {
        data: this.typeArray,
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
        },
      },
      yAxis: {
        type: 'value',
        // show:false,
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
        name: '产量',
        type: 'line',
        smooth: true,
        symbol:'circle',    //设定为实心点  emptyCircle
        symbolSize: 5,   //设定实心点的大小
        itemStyle: {
          normal: {
            color:(params: any) => {
              return this.colorArray[params.dataIndex]
            },
            label: {
              show: true,  // 显示数量
              position: 'top',//在上方显示
              textStyle: {//数值样式
                color: 'rgba(255,255,255,0.79)',
                fontSize: 9,
              }
            }
          },
        },
        lineStyle:{//线条样式
          width:1.5,
          // color: '#FF9372',
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
              offset: 0,
              color: '#FFE01E'
              },
              {
              offset: 0.25,
              color: '#12DEFF'
              },
              {
              offset: 0.5,
              color: '#BF7AFF'
              },
              {
              offset: 0.75,
              color: '#FF9372'
              },
              {
              offset: 1,
              color: '#F96CD3'
              }
            ],
            global: false, // 缺省为 false
          }
        },
        data: [22, 13, 45, 11, 40]
      }]
    };

    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('adver-space-ecpm'));
      myChart.setOption(this.option);
    }
  }
</script>
