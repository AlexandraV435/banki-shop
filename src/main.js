import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import Storage from 'vue-ls';
Vue.use(Storage);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'material-design-icons-iconfont';


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
