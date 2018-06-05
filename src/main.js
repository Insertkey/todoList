import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import vuexStore from '../src/store/index.js'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  store:vuexStore,
  render: h => h(App)
})
