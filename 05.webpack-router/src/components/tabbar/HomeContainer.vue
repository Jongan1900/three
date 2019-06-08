<template>
  <div>
    <swipe :banner="banner" :isfull="true"></swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../img/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../img/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/phonelist">
          <img src="../../img/menu3.png" alt>
          <div class="mui-media-body">商品详情</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast, MessageBox } from "mint-ui";
import axios from "axios";
import Vue from "vue";
import swipe from '../subcomponents/Swipe.vue'
export default {
  data() {
    return {
      banner: [],
      name: ""
    };
  },
  created() {
    this.show();
    // console.log(this.banner);
  },

  methods: {
    show() {
      // console.log(this.banner);
      // Make a request for a user with a given ID
      axios
        .get(
          "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getna"
        )
        .then(
          function(response) {
            // console.log(response);
            // Toast({ message: "我拿到了数据", position: "bottom" });
            // MessageBox.prompt("请输入姓名")
            //   .then(({ value }) => {
            //     this.name = value;
            //   })
            //   .then(() => {
            //     MessageBox.alert(this.name+'欢迎你的到来');
            //   });
            this.banner = response.data.banner;
          }.bind(this)
        );
      console.log(this.banner);
    }
  },
  components:{
    swipe,
  }
};
</script>


<style lang="scss" scoped>
.mui-grid-9 {
  background-color: #fff;
  border: none;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 12px;
  }
}
</style>



