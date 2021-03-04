import Vue from 'vue'
import VueRouter from "vue-router"
import { routers } from "./const"

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: routers
})

export default router
