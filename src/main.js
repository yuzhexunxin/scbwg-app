import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, {ImagePreview} from 'vant'
import 'vant/lib//index.css'
import { Lazyload } from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Vant)
Vue.use(Lazyload);
Vue.use(ElementUI);
Vue.use(ImagePreview)
import Axios from 'axios'
Vue.prototype.$axios = Axios
import VConsole from 'vconsole';
Vue.prototype.$vconsole = new VConsole();
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





