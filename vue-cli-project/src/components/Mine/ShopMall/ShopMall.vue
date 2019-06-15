<template>
  <div class="shopmall">
    <allheader></allheader>
    <div class="line"></div>
    <div class="tab">
      <div class="l">
        <p :class="tab==1?'active':''" @click="toring">戒指</p>
        <p :class="tab==2?'active':''" @click="toproduct">装扮</p>
        <p :class="tab==3?'active':''" @click="topropi">道具</p>
      </div>
      <p class="r">
        <i class="icon1">
          <img src="../../../assets/iconfont1.png" alt>
        </i>
        <span>263</span>
        <i class="icon2">
          <img src="../../../assets/iconfont2.png" alt>
        </i>
      </p>
    </div>

    <router-view></router-view>
  </div>
</template>


<script>
import allheader from "../ShopMall/AllHeader.vue";
export default {
  data() {
    return {
      tab: 1
    };
  },
  linkActiveClass: "active",
  components: {
    allheader
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal == "/mine/shopmall/ring") {
        console.log(this);
        this.tab = 1;
      } else if (newVal == "/mine/shopmall/product") {
        this.tab = 2;
      } else if (newVal == "/mine/shopmall/propi") {
        this.tab = 3;
      }
    }
  },
  methods: {
    toring() {
      // console.log(this);
      this.$router.push({
        name: "ring"
      });
    },
    toproduct() {
      this.$router.push({
        name: "product"
      });
    },

    topropi() {
      this.$router.push({
        name: "propi"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.shopmall {
  .tab {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .l {
      display: flex;
      justify-content: left;
      .active {
        border-bottom: 2px solid rgb(51, 182, 51);
        color: rgb(51, 182, 51);
      }
      p {
        margin-right: 30px;
        padding-bottom: 5px;
      }
    }
    .r {
      font-size: 0.875rem;
      background-color: #eee;
      width: 6.25rem;
      border-radius: 2.5rem;
      height: 1.875rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon1 {
        padding-left: 0.1875rem;
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        img {
          width: 100%;
        }
      }
      .icon2 {
        padding-left: 0.1875rem;
        display: block;
        width: 1.5625rem;
        height: 1.5625rem;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
