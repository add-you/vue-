<template>
  <div>
      <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.id">
          <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>



    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newsList">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photoList">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodsList">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>


  
</template>

<script>
export default {
    data() {
        return {
            lunboList: []
        }
    },
    created() {
        this.getimg()
    },
    methods: {
        getimg() {
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(res => {
                console.log(res);
                
                if(res.body.status === 0) {
                    this.lunboList = res.body.message

                } else {
                    Toast("图片加载失败")
                }
                
            })
        }
    }
}
</script>


<style scoped>
    .mint-swipe {
        height: 150px;
    }
    .mint-swipe img {
        height: 150px;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border:none;
    }
    .mui-grid-view.mui-grid-9 img {
        width: 60px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>


