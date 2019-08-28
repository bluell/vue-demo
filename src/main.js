import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import App from './App.vue';
import routes from './router.config';

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

// 注册插件
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // 注意是routes不是routers
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
