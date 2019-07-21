import VueRouter from 'vue-router'

import homeCont from './user/tabbar/home.vue'
import memberCont from './user/tabbar/member.vue'
import shopcarCont from './user/tabbar/shopcar.vue'
import searchCont from './user/tabbar/search.vue'
import newsList from './user/news/newsList.vue'
import newsInfo from './user/news/newsInfo.vue'
import photoLIst from './user/photos/photoList.vue'
import photoInfo from './user/photos/photoInfo.vue'
import goodsList from './user/goods/goodsList.vue'

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: homeCont},
        { path: '/member', component: memberCont},
        { path: '/shopcar', component: shopcarCont},
        { path: '/search', component: searchCont},
        { path: '/home/newsList', component: newsList},
        { path: '/home/newsInfo/:id', component: newsInfo},
        { path: '/home/photoList', component: photoLIst},
        { path: '/home/photoInfo/:id', component: photoInfo},
        { path: '/home/goodsList', component: goodsList}
    ],
    linkActiveClass: 'mui-active'
})
