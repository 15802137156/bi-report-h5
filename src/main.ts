import Vue from 'vue';
import FastClick from 'fastclick';
import VConsole from 'vconsole';
import flexible from '@/utils/flexible';
import 'normalize.css/normalize.css';
import router from './router';
// @ts-ignore
import App from './App.vue';

Vue.config.productionTip = false;

flexible();

FastClick['attach'](document.body);

console.log('NODE_ENV', process.env);

if (process.env.NODE_ENV !== "prod") {
  new VConsole();
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
