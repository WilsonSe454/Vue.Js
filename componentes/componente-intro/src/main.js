import Vue from 'vue'
import App from './App.vue'
// import Contador from './MyContador.vue'
import Contadores from './MyContadores.vue'

Vue.config.productionTip = false
// Vue.component('app-contadores', Contador)
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
