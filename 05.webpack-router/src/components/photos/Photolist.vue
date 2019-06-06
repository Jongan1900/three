<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll" style="touch-action:pan-y">
          <a
            :class="['mui-control-item', item.id==0?'mui-active':'']"
            v-for="item in phototitle"
            :key="item.id"
            @click="clickname(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="photoul">
      <router-link  v-for="item in photolist" :key="item.uniquekey"  tag="li" :to="'/home/photoinfo/'+item.uniquekey">
        <img v-lazy="item.thumbnail_pic_s">
        <div class="info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-body">{{item.title}}{{item.title}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

import mui from "../../../lib/mui/js/mui";
import Axios from "axios";
// import { Lazyload } from "mint-ui";
// Vue.use(Lazyload);

mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0006 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
export default {
  data() {
    return {
      phototitle: [],
      photolist: []
    };
  },
  created() {
    this.getphoto();
    this.getphotolist();
  },
  methods: {
    getphoto() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getphoto"
      ).then(data => {
        // console.log(data);
        if (data.data.status === 0) {
          data.data.message.unshift({ title: "全部", id: 0 });
          this.phototitle = data.data.message;
          // console.log(this.phototitle);
        }
      });
    },
    clickname(id) {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getphoto"
      ).then(data => {
        if (data.data.status === 0) {
          console.log(data.data.message);
          for (var key of data.data.message) {
            if (key.id == id) {
              console.log(key.id);
            }
          }
        }
      });
    },
    getphotolist() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getnew"
      ).then(data => {
        // console.log(data.data  .result.data);
        this.photolist = data.data.result.data;
        console.log(this.photolist);
      });
    }
  }
};
</script>
<style lang="scss" >
//  touch-action: pan-y;

.photoul {
  padding: 0 5px;
  li {
    background-color: #ccc;
    margin-bottom: 8px;
    position: relative;
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    img {
      width: 100% !important;
      vertical-align: middle;
      box-shadow: 0 0 5px #ccc;
    }
    .info {
      // background-color: #fff;
      margin-bottom: 0px;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color:  rgba(0,0,0,0.4);
        color: #fff;
        max-height: 88px;
        overflow: hidden;
      p {
        color: #fff;
        margin-bottom: 0px;
      }
      .info-title {
        font-weight: bold;
        font-size: 15px;
      }
      .info-body {
        font-size: 13px;
        line-height: 14px;
      }
    }
  }
}
</style>
