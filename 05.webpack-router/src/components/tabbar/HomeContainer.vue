<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(val,key,i)  in banner" :key="i">
        <img :src="val" alt>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9 ">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../img/menu3.png" alt="">
          <div class="mui-media-body">商品详情</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../img/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
       <img src="../../img/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      
      
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
       <img src="../../img/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      banner: []
    };
  },
  created() {
    this.show();
    // console.log(this.banner);
  },

  methods: {
    dd() {
      console.log(this.banner);
    },
    show() {
      // console.log(this.banner);
      // Make a request for a user with a given ID
      axios
        .get(
          "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getna"
        )
        .then(
          function(response) {
            // handle success
            console.log("拿到了数据");
            console.log(response);
            // console.log(this.$data.banner);
            this.banner = response.data.banner;
            // console.log(this.banner);
          }.bind(this)
        );
      console.log(this.banner);
    }
  }
};
</script>


<style lang="scss" scoped>
.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mint-swipe {
  height: 300px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: #000;
    }
    &:nth-child(2) {
      background-color: #ccc;
    }
    &:nth-child(3) {
      background-color: #66ccff;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
  img{
    width: 60px;
    height: 60px;
  }
  .mui-media-body{
    font-size: 12px;
  }
}
</style>



