import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "@/assets/global.css";

/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
// import { faCoffee as fasCoffee } from '@fortawesome/pro-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faStar,faStarSolid)


Vue.component('font-awesome-icon', FontAwesomeIcon)
*/

import { MdButton, MdDialog, MdField, MdIcon,MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdDialog)
Vue.use(MdField)
Vue.use(MdTabs)
Vue.use(MdIcon)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
