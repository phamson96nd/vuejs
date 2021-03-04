import store from '../store/index'
import HomeComponent from "../view/HomeComponent";
import DashboardComponent from "../view/DashboardComponent";
import LoginComponent from "../view/LoginComponent";

export const routers = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']) {
                return next({
                    name: 'login'
                })
            }
            next()
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
]
