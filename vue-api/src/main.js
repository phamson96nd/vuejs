import Vue from 'vue'
import App from './App.vue'
import HelloJs from 'hellojs/dist/hello.all.min'
import VueHello from 'vue-hellojs'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

HelloJs.init({
  google: '995568444460-b7astq8crnts5nco40heqcjobg7vg4kn.apps.googleusercontent.com',
  facebook: '765661614347054'
}, {
  redirect_uri: 'https://phamson.com:8080/dashboard'
});
Vue.use(VueHello, HelloJs);
Vue.use(VueAxios, axios)


new Vue({
  render: h => h(App),
}).$mount('#app')
