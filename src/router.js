import VueRouter from 'vue-router'

import homeCont from './user/home.vue'
import memberCont from './user/member.vue'
import shopcarCont from './user/shopcar.vue'
import searchCont from './user/search.vue'

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: homeCont},
        { path: '/member', component: memberCont},
        { path: '/shopcar', component: shopcarCont},
        { path: '/search', component: searchCont}
    ],
    linkActiveClass: 'mui-active'
})
