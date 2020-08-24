import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// 引入font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// 要引入的fontawsome 樣式
// fas樣式
import {
  faPhoneSquareAlt,
  faEnvelope,
  faHome,
  faWifi,
  faUtensils,
  faGlassMartiniAlt,
  faBell,
  faTty,
  faFan,
  faDiceSix,
  faCouch,
  faMountain,
  faSmokingBan,
  faBaby,
  faDog



} from '@fortawesome/free-solid-svg-icons'
// fab樣式
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 把要引入的font-awesome 樣式 加到library
library.add(
  faInstagram,
  faFacebookSquare,
  faPhoneSquareAlt,
  faEnvelope,
  faHome,
  faWifi,
  faUtensils,
  faGlassMartiniAlt,
  faBell,
  faTty,
  faFan,
  faDiceSix,
  faCouch,
  faMountain,
  faSmokingBan,
  faBaby,
  faDog




);
Vue.component('font-awesome-icon', FontAwesomeIcon) //使用kebab-case

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
