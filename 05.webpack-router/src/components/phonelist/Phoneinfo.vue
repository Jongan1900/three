<template>
  <div class="phoneinfo-box">
    <!-- //图片区 -->
    <transition @before-enter="comein" @enter="activein" @after-enter="leavein">
      <div v-show="isflag" class="ball" ref="ball"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipe :banner="phoneinfoimg" :isfull="false"></swipe>
        </div>
      </div>
    </div>
    <!-- //购买区 -->
    <div class="mui-card">
      <div class="mui-card-header">{{phoneinfolist.skuName}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥{{~~phoneinfolist.skuPrice+200}}</del> &nbsp;&nbsp;销售价:
            <span class="nowprice">￥{{phoneinfolist.skuPrice}}</span>
          </p>
          <p>
            购买数量
            <numbox @getshopnum="getshopnum" :max="phoneinfolist.skuPrice"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="ballshow">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- //参数区 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{phoneinfolist.productID}}</p>
          <p>商品库存：{{phoneinfolist.skuNo}}件</p>
          <p>上架时间：{{new Date()| timestr}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large" @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" plain size="large" @click="goCommit(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swipe from "../subcomponents/Swipe.vue";
import numbox from "../subcomponents/Phoneinfo-numbox.vue";
import Axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      phoneinfoimg: [],
      phoneinfolist: [],
      isflag: false,
      shopnum: 1
    };
  },
  created() {
    this.get();
  },
  methods: {
    getshopnum(count) {
      this.shopnum = count;
      // console.log(count);
    },
    ballshow() {
      if (this.isflag == true) {
        this.isflag == false;
        this.isflag = !this.isflag;
      } else {
        this.isflag = !this.isflag;
      }
      var goodsinfo = {
        id: this.id,
        count: this.shopnum,
        price: this.phoneinfolist.skuPrice,
        selected: true,
        title:this.phoneinfolist.skuName,
        img:this.phoneinfolist.skuThumbImgUrl
      };
      this.$store.commit('addshopcart',goodsinfo)
    },
    get() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getphone"
      ).then(data => {
        let phonelist = data.data.goodsList;
        for (var item of phonelist) {
          if (item.goodsId == this.id) {
            let photoimg = item.skuThumbImgUrl;
            this.phoneinfoimg = [photoimg, photoimg, photoimg];
            this.phoneinfolist = item;
          }
        }
        // console.log(this.phoneinfolist);
      });
    },
    goDesc(id) {
      // this.$router.
      this.$router.push({ name: "phonegodesc", params: { id } });
    },
    goCommit(id) {
      this.$router.push({ name: "phonegocommit", params: { id } });
    },
    comein(el) {
      el.style.transform = " translate(0, 0)";
    },
    activein(el, done) {
      const ballP = this.$refs.ball.getBoundingClientRect();
      const iconP = document.getElementById("shopicon").getBoundingClientRect();
      const xDist = iconP.left - ballP.left;
      const yDist = iconP.top - ballP.top;
      console.log(xDist, yDist);
      el.offsetWidth;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(1,-1.35,0,1.47)";
      done();
    },
    leavein(el) {
      this.isflag = !this.isflag;
    }
  },
  components: {
    swipe,
    numbox
  }
};
</script>
<style lang="scss" scoped>
.phoneinfo-box {
  background-color: #ccc;
  overflow: hidden;
  .nowprice {
    color: red;
    font-weight: bold;
  }
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  z-index: 99;
  position: absolute;
  top: 490px;
  left: 140px;
  // transform:translate(100px,275px)
}
.mui-card-footer {
  display: block;
  button {
    margin: 10px 0;
  }
}
</style>
