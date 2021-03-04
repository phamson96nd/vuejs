import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import axios from "axios"
import store from './store/index'

require('./store/subcriber')

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    render: h => h(App),
    router,
    store
  }).$mount('#app')
})
