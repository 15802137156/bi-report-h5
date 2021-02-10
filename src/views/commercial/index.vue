<template lang="pug">
  .management-briefing
    .banner
      .logo
        .date 2020-07-26 16:38:44
      .kite
    //- 整体收入
    .commercial-one
      .title-container
        .title-icon
        .title 整体收入
        .rectangle
        .right-icon
          .update 22分钟前更新
      .whole-income
        .income
          .title 昨天收入
          .money {{ changeFmt(5000) }}
        .income
          .title 本月收入
          .money {{ changeFmt(100000) }}
        .income
          .title 累计收入
          .money {{ changeFmt(100000000) }}
    //- 广告商收入
    .commercial-two
      .title-container
        .title-icon
        .title 广告商收入
        .rectangle
      .advertiser.clearfix
        .advertiser-list(
          v-for="item in advertiserArray" :key="item.name"
        )
          .name {{ item.name }}
          .source 收入
          .money {{ changeFmt(item.money) }}
    //- 广告位收入
    .commercial-three
      .title-container
        .title-icon
        .title 广告位收入
        .rectangle
      .advertiser.clearfix
        .advertiser-list(
          v-for="item in adverspaceArray" :key="item.name"
        )
          .name {{ item.name }}
          .source 收入
          .money {{ changeFmt(item.money) }}
    //- 广告数据
    .commercial-four
      .title-container
        .title-icon
        .title 广告数据
        .rectangle
      .advertising-data
        .income(
          v-for="(item, index) in adversourceArray" :key="index"
        )
          .title {{ item.name }}
          .money {{ changeFmt(item.msg) }}
    //- 7天数据趋势
    <seven-data :commonEcharts = "commonEcharts" />
    //- 广告商曝光占比
    <advertiser-exposure :commonEcharts = "commonEcharts" />
    //- 广告商收益占比 
    <advertiser-revenue :commonEcharts = "commonEcharts" />
    //- 广告商Ecpm
    <advertiser-ecpm :commonEcharts = "commonEcharts" />
    //- 广告位曝光占比
    <adver-space-exposure :commonEcharts = "commonEcharts" />
    //- 广告位收益占比 
    <adver-space-revenue :commonEcharts = "commonEcharts" />
    //- 广告位Ecpm
    <adver-space-ecpm :commonEcharts = "commonEcharts" />
    //- 产品请求
    .product-request
      .title-container
        .title-icon
        .title 产品请求
        .rectangle
      .time
        span 2020.8.19
        span 2020.8.20
        span
      .advertising-data
        .income(
          v-for="(item, index) in adversourceArray" :key="index"
        )
          .title {{ item.name }}
          .money {{ changeFmt(item.msg) }}
    //- 产品填充率
    .product-request
      .title-container
        .title-icon
        .title 产品填充率
        .rectangle
      .time
        span 2020.8.19
        span 2020.8.20
        span
      .advertising-data
        .income(
          v-for="(item, index) in adversourceArray" :key="index"
        )
          .title {{ item.name }}
          .money {{ changeFmt(item.msg) }}
    //- 产品数据
    .product-request
      .title-container
        .title-icon
        .title 产品数据
        .rectangle
      <product-data :commonEcharts = "commonEcharts" />
    //- 产品对比
    .product-request.commercial-five
      .title-container
        .title-icon
        .title 产品对比
        .rectangle
      <product-comparison :commonEcharts = "commonEcharts" />
    //- 收益占比
    <revenue-share :commonEcharts = "commonEcharts" />
    //- 产品变现效果
    <realization-products :commonEcharts = "commonEcharts" />
</template>

<script lang="ts">
  import echarts from 'echarts';
  import { Vue, Component } from 'vue-property-decorator';
  import sevenData from './components/sevenData.vue';
  import productData from './components/productData.vue';
  import revenueShare from './components/revenueShare.vue';
  import advertiserEcpm from './components/advertiserEcpm.vue';
  import adverSpaceEcpm from './components/adverSpaceEcpm.vue';
  import advertiserRevenue from './components/advertiserRevenue.vue';
  import advertiserExposure from './components/advertiserExposure.vue';
  import adverSpaceExposure from './components/adverSpaceExposure.vue';
  import adverSpaceRevenue from './components/adverSpaceRevenue.vue';
  import productComparison from './components/productComparison.vue';
  import realizationProducts from './components/realizationProducts.vue';
  import { thousandsFmt } from '@/utils/index';
  import testApi from '@/api/test';
  
  @Component({
    components: {
      sevenData,
      productData,
      revenueShare,
      advertiserEcpm,
      adverSpaceEcpm,
      advertiserRevenue,
      advertiserExposure,
      adverSpaceRevenue,
      adverSpaceExposure,
      productComparison,
      realizationProducts,
    }
  })
  export default class Index extends Vue {

    commonEcharts: Object = echarts

    advertiserArray:Array<any> = [{
        name: '穿山甲',
        money: 100000000
      }, {
        name: '优量汇',
        money: 100000000
      }, {
        name: '快手',
        money: 100000000
      }, {
        name: '百度',
        money: 100000000
      }, {
        name: 'Topmob',
        money: 100000000
      }];

    adverspaceArray:Array<any> = [{
        name: '开屏',
        money: 100000000
      }, {
        name: '插屏',
        money: 100000000
      }, {
        name: '原生',
        money: 100000000
      }, {
        name: '互动',
        money: 100000000
      }, {
        name: '其他',
        money: 100000000
      }];

      adversourceArray:Array<any> = [{
        name: '广告请求',
        msg: 100000
      }, {
        name: '前日广告请求',
        msg: 80000
      }, {
        name: '环比',
        msg: '25%'
      },{
        name: '广告填充',
        msg: 85532
      }, {
        name: '前日广告填充',
        msg: 71532
      }, {
        name: '环比',
        msg: '16.8%'
      },{
        name: '广告曝光',
        msg: 53232
      }, {
        name: '前日广告曝光',
        msg: 42532
      }, {
        name: '环比',
        msg: '25.6%'
      },{
        name: '广告填充率',
        msg: '83.5%'
      }, {
        name: '前日广告填充率',
        msg: '89.5%'
      }, {
        name: '环比',
        msg: '-6.6%'
      },{
        name: '广告曝光率',
        msg: '63.5%'
      }, {
        name: '前日广告曝光率',
        msg: '59.5%'
      }, {
        name: '环比',
        msg: '7.9%'
      },{
        name: '广告利用率',
        msg: '53.5%'
      }, {
        name: '前日广告利用率',
        msg: '51.6%'
      }, {
        name: '环比',
        msg: '0.9%'
      }];

    created() {
      this.init()
    }

    mounted() {}

    async init() {
      const res = await testApi.getPayTypes();
      console.log('res', res)
    }

    changeFmt(value: number) {
      if (typeof value === 'number') {
        return thousandsFmt(value);
      } else {
        return value
      }
    }
  }
</script>

<style lang="less">
  @import url('./index.less');
</style>

