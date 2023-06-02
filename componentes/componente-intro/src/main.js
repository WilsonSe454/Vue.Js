import Vue from 'vue'
import App from './App.vue'
import MyContador from './MyContador.vue'

Vue.config.productionTip = false
Vue.component('app-contador', MyContador)

new Vue({
  render: h => h(App),
}).$mount('#app')
