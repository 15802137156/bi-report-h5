<template lang="pug">
  .product-data
    .title 产品Ecpm
    #product-data.canvas-data-container
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
  export default class ProductData extends Vue {

    @Prop({ type: Object, default: () => {} }) commonEcharts: any;

    typeArray:Array<string> = ['即刻天气', '知心天气', '诸葛天气', '诸葛万年历', '清理管家极速版', '祥云天气', '365天气'];
    colorArray:Array<string> =[ '#FFE01E', '#12DEFF', '#BF7AFF', '#FF7ACE', '#FF661E', '#56FF8F', '#1B77FF'];

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
          data: ['6/18', '6/19', '6/20', '6/21', '6/22', '6/23', '6/24'],
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
                name: '即刻天气',
                type: 'line',
                data: [12, 13, 11, 13, 9, 13, 15],
                smooth: true,
                symbol:'circle',    //设定为实心点  emptyCircle
                symbolSize: 5,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    //圆圈颜色
                    color: '#FFE01E',
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
                  color: '#FFE01E',
                },
            },
            {
                name: '知心天气',
                type: 'line',
                data: [22, 28, 29, 23, 20, 23, 21],
                smooth: true,
                symbol:'circle',    //设定为实心点  emptyCircle
                symbolSize: 5,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    //圆圈颜色
                    color: '#12DEFF',
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
                  color: '#12DEFF',
                },
            },
            {
                name: '诸葛天气',
                type: 'line',
                data: [35, 33, 30, 35, 30, 33, 31],
                smooth: true,
                symbol:'circle',    //设定为实心点  emptyCircle
                symbolSize: 5,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    //圆圈颜色
                    color: '#BF7AFF',
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
                  color: '#BF7AFF',
                },
            },
             {
                name: '诸葛万年历',
                type: 'line',
                data: [42, 43, 40, 43, 49, 40, 42],
                smooth: true,
                symbol:'circle',    //设定为实心点  emptyCircle
                symbolSize: 5,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    //圆圈颜色
                    color: '#FF7ACE',
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
                  color: '#FF7ACE',
                },
            },
            {
                name: '清理管家极速版',
                type: 'line',
                data: [50, 53, 51, 53, 59, 53, 52],
                smooth: true,
                symbol:'circle',    //设定为实心点  emptyCircle
                symbolSize: 5,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    //圆圈颜色
                    color: '#FF661E',
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
                  color: '#FF661E',
                },
            },
            {
                name: '祥云天气',
                type: 'line',
                data: [62, 62, 61, 64, 69, 63, 62],
                smooth: true,
                symbol:'circle',    //设定为实心点  emptyCircle
                symbolSize: 5,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    //圆圈颜色
                    color: '#56FF8F',
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
                  color: '#56FF8F',
                },
            },
            {
                name: '365天气',
                type: 'line',
                data: [72, 70, 75, 74, 79, 70, 72],
                smooth: true,
                symbol:'circle',    //设定为实心点  emptyCircle
                symbolSize: 5,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    //圆圈颜色
                    color: '#1B77FF',
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
                  color: '#1B77FF',
                },
            },
        ]
    };
    created() {}

    mounted() {
      this.init()
    }

    init() {
      const myChart = this.commonEcharts.init(document.getElementById('product-data'));
      myChart.setOption(this.option);
    }
  }
</script>
