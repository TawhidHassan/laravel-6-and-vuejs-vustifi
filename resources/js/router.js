import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/loginComponent.vue';
import Admin from './components/AdminComponent.vue';
Vue.use(VueRouter)


const routes=[
    {
        path:'/',
        redirect:'/login'
       
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/admin',
        component:Admin,
        beforeEnter: (to,from,next)=>{
            if(localStorage.getItem('token'))
            {
                next();
            }else{
                next('/');
            }
           
        }
    }
]

export default new VueRouter({routes})

