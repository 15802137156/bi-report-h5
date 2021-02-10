<template lang="pug">
  .weather-report
    <header-template :class="{'show-fixed': showFixed === true}" @listenChild="gitChild" />
    .dotted-line
    .banner
      .logo
        .date 2020-07-26 16:38:44
      .kite
    //- 项目概况
    .overview
      .title-container
        .title-icon
        .title 项目概况
        .rectangle
        .right-icon
          .update 22分钟前更新
      .advertising-data
        .income(
          v-for="(item, index) in adversourceArray" :key="index"
        )
          .title {{ item.name }}
          .money {{ changeFmt(item.msg) }}
    //- 分包明细
    .subcontract
      .title-container
        .title-icon
        .title 分包明细
        .rectangle
      .advertising-data
        .income(
          v-for="(item, index) in adversourceArray" :key="index"
        )
          .title {{ item.name }}
          .money {{ changeFmt(item.msg) }}
    //- 合作收益
    .cooperation
      .title-container
        .title-icon
        .title 合作收益
        .rectangle
      .advertising-data
        .income(
          v-for="(item, index) in cooperationArray" :key="index"
        )
          .title
            span {{ item.name }}
            .percentage(
              v-if="item.percentage"
            )  ({{ item.percentage }})
          .money {{ changeFmt(item.msg) }}
    //- 广告商ECPM
    <advertiser-ecpm :commonEcharts = "commonEcharts" />
    //- 广告商收入
    <advertiser-revenue :commonEcharts = "commonEcharts" />
    //- 近8日新增设备数和活页设备数
    <new-sheet :commonEcharts = "commonEcharts" />
    //- 近30日当日收入和当日市场支出
    <income-spending :commonEcharts = "commonEcharts" />
    //- 近30日收支ROI
    <balance-roi :commonEcharts = "commonEcharts" />
    //- 近30日ARPU趋势
    <arpu-trend :commonEcharts = "commonEcharts" />
    //- 近30日留存率曲线图
    <retention-curve :commonEcharts = "commonEcharts" />
    //- 近30日次留、7留、15留曲线图
    <leave-graph :commonEcharts = "commonEcharts" />
    //- 近30日预估回收周期(天)
    <recycling-cycle :commonEcharts = "commonEcharts" />
    //- 预估LTV90和预估ROI90
    <forecast-ninety :commonEcharts = "commonEcharts" />
</template>

<script lang="ts">
  import echarts from 'echarts';
  import newSheet from './components/newSheet.vue';
  import arpuTrend from './components/arpuTrend.vue';
  import balanceRoi from './components/balanceRoi.vue';
  import leaveGraph from './components/leaveGraph.vue';
  import headerTemplate from './components/header.vue';
  import { Vue, Component } from 'vue-property-decorator';
  import recyclingCycle from './components/recyclingCycle.vue';
  import forecastNinety from './components/forecastNinety.vue';
  import retentionCurve from './components/retentionCurve.vue';
  import advertiserEcpm from './components/advertiserEcpm.vue';
  import incomeSpending from './components/incomeSpending.vue';
  import advertiserRevenue from './components/advertiserRevenue.vue';
  import { thousandsFmt, throttle } from '@/utils/index';


  @Component({
    components: {
      newSheet,
      arpuTrend,
      balanceRoi,
      leaveGraph,
      recyclingCycle,
      forecastNinety,
      retentionCurve,
      advertiserEcpm,
      headerTemplate,
      incomeSpending,
      advertiserRevenue,
    }
  })
  export default class Index extends Vue {

    commonEcharts: Object = echarts

    showFixed: boolean = false

    adversourceArray:Array<any> = [{
      name: '昨日新增设备数',
      msg: 9697308000
    }, {
      name: '本月新增设备数',
      msg: 969730800
    }, {
      name: '累计新增设备数',
      msg: 969730800
    },{
      name: '昨日获客成本',
      msg: 969730800
    }, {
      name: '本月获客成本',
      msg: 969730800
    }, {
      name: '累计获客成本',
      msg: 969730800
    },{
      name: '昨日收入',
      msg: 969730800
    }, {
      name: '本月收入',
      msg: 969730800
    }, {
      name: '累计收入',
      msg: 969730800
    },{
      name: '昨日收支ROI',
      msg: 1.78
    }, {
      name: '昨日收支ROI',
      msg: 1.78
    }, {
      name: '累计收支ROI',
      msg: 1.78
    }];


    cooperationArray:Array<any> = [{
      name: '穿山甲收入',
      percentage: '37%',
      msg: 9697308000
    }, {
      name: '穿山甲展示',
      msg: 969730800
    }, {
      name: '穿山甲点击',
      msg: 969730800
    },{
      name: '优量汇收入',
      percentage: '37%',
      msg: 969730800
    }, {
      name: '优量汇展示',
      msg: 969730800
    }, {
      name: '优量汇点击',
      msg: 969730800
    },{
      name: '互动收入',
      percentage: '37%',
      msg: 969730800
    }, {
      name: '互动展示',
      msg: 969730800
    }, {
      name: '互动点击',
      msg: 969730800
    },{
      name: '百度收入',
      percentage: '37%',
      msg: 969730800
    }, {
      name: '百度展示',
      msg: 969730800
    }, {
      name: '百度点击',
      msg: 969730800
    }];

    created() {}

    mounted() {
      window.addEventListener('scroll',throttle(this.handleScroll, 500))
    }

    handleScroll() {
      window.onscroll = () => {
        const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 300) {
          this.showFixed = true
        } else {
          this.showFixed = false
        }
      }
    }

    changeFmt(value: number) {
      if (typeof value === 'number') {
        return thousandsFmt(value);
      } else {
        return value
      }
    }

    gitChild(index: number) {
      console.log('子组件', index)
    }

  }
</script>

<style lang="less">
  @import url('./index.less');
</style>
