import Vue from 'vue'
import app from './App.vue'
import resource from 'vue-resource'
Vue.use(resource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './assets/lib/mui-master/dist/css/mui.min.css'
import './assets/lib/mui-master/dist/css/icons-extra.css'

import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import router from './router.js'

var vm = new Vue({
    el: "#app",
    data: {
        
    },
    render: c => c(app),
    router
})
