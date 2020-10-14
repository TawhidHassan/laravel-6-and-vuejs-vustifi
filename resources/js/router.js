import Vue from 'vue';
import VueRouter from 'vue-router';

const foo={template:"<v-alert type='error'>iam foo commponent<v-alert>"}
const bar={template:"<v-alert type='error'>iam bar commponent<v-alert>"}
const user={template:"<v-alert type='error'>iam {{$route.params.name}}<v-alert>"}

Vue.use(VueRouter)


const routes=[
    {
        path:'/foo',
        component:foo,
    },
    {
        path:'/bar',
        component:bar,
    },
    {
        path:'/user/:name',
        component:user,
    }
]

export default new VueRouter({routes})