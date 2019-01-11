import Vue from 'vue'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(router)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
