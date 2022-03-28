import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import Msg from '@/plugins/msg'
import store from './store'

Vue.config.productionTip = false
Vue.use(Msg)

Vue.prototype.$loading = function(isLoading, msg="Espere un momento ..."){
  this.$store.commit('setLoading', isLoading)
  this.$store.commit('setMsgLoading', msg)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')