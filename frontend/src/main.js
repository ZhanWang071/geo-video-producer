import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay, faArrowRotateLeft, faFolderPlus, faCamera, faUpload, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add( faPlay, faArrowRotateLeft, faFolderPlus, faCamera, faUpload, faMapLocationDot )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI, {locale})

import router from '@/router'
import store from '@/store'

new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  router,
  store,
}).$mount('#app')
