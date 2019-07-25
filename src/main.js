import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import App from './App.vue';
import routers from './router.config';

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

// 注册插件
Vue.use(VueRouter);

new Vue({
  routers,
  render: h => h(App),
}).$mount('#app');
