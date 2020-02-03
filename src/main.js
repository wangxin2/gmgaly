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
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
      /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
      ak: '0hn8QhIIdXY3F5WnW7X3jYMaKQp1dr6O'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
