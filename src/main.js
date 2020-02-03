import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import qs from 'qs';

import echarts from 'echarts';
import 'echarts/map/js/china';
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
// Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
