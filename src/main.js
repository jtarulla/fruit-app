import Vue from 'vue';
import Toast from 'vue-toastification';
import App from './App.vue';
import router from './router';
import store from './store';
import './scss/index.scss';
import 'vue-toastification/dist/index.css';

Vue.use(Toast);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
