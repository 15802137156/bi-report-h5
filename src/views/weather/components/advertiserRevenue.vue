<template lang="pug">
  .seven-data
    .title
      .trend 广告商收入
      .source
        .canvas-type(
          v-for="(item, index) in typeArray" :key="index"
        )
          .spot(
            :style="{ background: colorArray[index] }"
          )
          span {{ item }}
    #advertiser-revenue.adver-space-ecpm
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class AdvertiserRevenue extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['穿山甲', '优量汇', '互动', '百度'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF', '#BF7AFF', '#FF9372'];

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
          formatter: '{value}w',
          margin: 15,
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
            data: [12, 13, 11, 13, 9, 13, 15, 18],
            smooth: true,
            symbol:'circle',    //设定为实心点  emptyCircle
            symbolSize: 5,   //设定实心点的大小
            itemStyle: {
              normal: {
                //圆圈颜色
                color: '#FFE01E',
                label : {
                  show: true,  // 显示数量
                  formatter: '{c}w',
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
          },
          {
            name: '优量汇',
            type: 'line',
            data: [22, 28, 29, 23, 20, 23, 21, 28],
            smooth: true,
            symbol:'circle',    //设定为实心点  emptyCircle
            symbolSize: 5,   //设定实心点的大小
            itemStyle: {
              normal: {
                //圆圈颜色
                color: '#12DEFF',
                label : {
                  show: true,  // 显示数量
                  formatter: '{c}w',
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
              color: '#12DEFF',
            },
          },
          {
            name: '互动',
            type: 'line',
            data: [35, 33, 30, 35, 30, 33, 31, 38],
            smooth: true,
            symbol:'circle',    //设定为实心点  emptyCircle
            symbolSize: 5,   //设定实心点的大小
            itemStyle: {
              normal: {
                //圆圈颜色
                color: '#BF7AFF',
                label : {
                  show: true,  // 显示数量
                  formatter: '{c}w',
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
              color: '#BF7AFF',
            },
          },
          {
            name: '百度',
            type: 'line',
            data: [42, 43, 40, 43, 49, 40, 42, 48],
            smooth: true,
            symbol:'circle',    //设定为实心点  emptyCircle
            symbolSize: 5,   //设定实心点的大小
            itemStyle: {
              normal: {
                //圆圈颜色
                color: '#FF9372',
                label : {
                  show: true,  // 显示数量
                  formatter: '{c}w',
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
          },
        ]
    };

    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('advertiser-revenue'));
      myChart.setOption(this.option);
    }
  }
</script>
