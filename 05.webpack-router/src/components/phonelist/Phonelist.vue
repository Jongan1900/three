<template>
  <div class="goods-list">
    <!-- <router-link class="goodsbox" v-for="item in goodslist" :key="item.goodsId" :to='"/home/phoneinfo/"+item.goodsId' tag="div">
      <img :src="item.skuThumbImgUrl" alt>
      <h1 class="title">{{ item.skuName }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.skuPrice }}</span>
          <span class="old">￥{{ ~~item.skuPrice+200 }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ Number(item.skuNo.slice(5,7)) }}件</span>
        </p>
      </div>
    </router-link> -->


    <a class="goodsbox" v-for="item in goodslist" :key="item.goodsId" :to='"/home/phoneinfo/"+item.goodsId' tag="div" @click="tz(item.goodsId)">
      <img :src="item.skuThumbImgUrl" alt>
      <h1 class="title">{{ item.skuName }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.skuPrice }}</span>
          <span class="old">￥{{ ~~item.skuPrice+200 }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ Number(item.skuNo.slice(5,7)) }}件</span>
        </p>
      </div>
    </a>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>



<script>
import Axios from "axios";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getphonelist();
  },
  methods: {
    tz(id){
      // this.$router.push("/home/phoneinfo/"+id)
      // this.$router.push({path:"/home/phoneinfo/"+id})
      this.$router.push({name:"phoneinfo",params:{id}})
    },
    getMore() {
      this.getphonelist();
    },
    getphonelist() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getphone"
      ).then(data => {
        this.goodslist = [...this.goodslist, ...data.data.goodsList];

        console.log(this.goodslist);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goodsbox {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
