<template lang="pug">
  .seven-data
    .title
      .trend 近30日预估回收周期(天)
      .source
        .canvas-type
          span 0代表无收入或成本
    #recycling-cycle.adver-space-ecpm
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class RecyclingCycle extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    option = {
        grid: {
          containLabel:true,
          x: 10,
          x2: 20,
          y: 20,
          y2: 10,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['6/18', '6/19', '6/20', '6/21', '6/22', '6/23', '6/24', '6/25'],
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
          margin: 15,
          formatter: '{value}%',
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
        series: [
          {
            name: '穿山甲',
            type: 'line',
            data: [1.2, 22.3, 33.1, 34.3, 44.2, 44.3, 31.5, 21.8],
            smooth: true,
            symbol:'circle',    //设定为实心点  emptyCircle
            symbolSize: 5,   //设定实心点的大小
            itemStyle: {
              normal: {
                //圆圈颜色
                color: '#FFE01E',
                label: {
                  formatter: '{c}%',
                  show: true,//开启显示
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
          }
        ]
    };

    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('recycling-cycle'));
      myChart.setOption(this.option);
    }
  }
</script>
