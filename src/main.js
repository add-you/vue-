import Vue from 'vue'
import app from './App.vue'
import resource from 'vue-resource'
Vue.use(resource)

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 使用vue-preview
import preview from 'vue-preview'
Vue.use(preview)


// 定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})



//  调入MUI样式
import './assets/lib/mui-master/dist/css/mui.min.css'
import './assets/lib/mui-master/dist/css/icons-extra.css'

// import { Swipe, SwipeItem, Button } from 'mint-ui'

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
import 'mint-ui/lib/style.css'
import mintUI from 'mint-ui'
Vue.use(mintUI)


// import { Header } from 'mint-ui'
// Vue.component(Header.name, Header)

import router from './router.js'

var vm = new Vue({
    el: "#app",
    data: {
        
    },
    render: c => c(app),
    router
})
