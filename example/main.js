import Vue from 'vue'
import App from './App.vue'

import VueNavigationBar from '../src/index.js'
Vue.component('vue-navigation-bar', VueNavigationBar)

new Vue({
  el: '#app',
  render: h => h(App)
})
