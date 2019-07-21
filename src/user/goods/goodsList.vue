<template>
  <div class="goods-list">
    <div class="goods-item">
      <img
        src="//img12.360buyimg.com/mobilecms/s360x464_jfs/t1/32915/40/2592/127032/5c6bcd9aEb795bf43/37dd3a33f27ea0d5.jpg!cc_360x464!q70.dpg.webp"
        alt
      />
      <h1 class="title">秀莉芬2019夜店性感女装新款深V包臀连衣裙低胸超短裙</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥6979</span>
          <span class="old">￥7299</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="//img14.360buyimg.com/mobilecms/s360x464_jfs/t1/27562/31/12403/419129/5c970a5eE0601c354/6b853a98c421f3dc.jpg!cc_360x464!q70.dpg.webp"
        alt
      />
      <h1 class="title">港味高腰显瘦ins超火的裙子短裙A字裙半身裙女春夏2019新款半生裙</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥5399</span>
          <span class="old">￥6799</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="//img12.360buyimg.com/mobilecms/s360x464_jfs/t23110/109/801594452/225659/a2c1ff85/5b433456Na1327417.jpg!cc_360x464!q70.dpg.webp"
        alt
      />
      <h1 class="title">三裳学院风百褶裙短裙半身裙女时尚高腰超短裙修身显瘦格子百褶裙防走光a字裙</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥6979</span>
          <span class="old">￥7299</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
    }
    .goods-list .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
    }
    .goods-list img {
        width: 100%;
    }
    .goods-list .title {
        font-size: 14px;
    }
    .goods-list .info {
        background-color: #eee;
    }
    .goods-list .info p {
        margin: 0;
        padding: 5px;
    }
    .goods-list .info .price .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    .goods-list .info .price .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }
    .goods-list .info .price .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>
