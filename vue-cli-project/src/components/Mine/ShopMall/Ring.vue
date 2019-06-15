<template>
  <div class="ring">
    <div class="classes">
      <img src="../../../assets/malltitle1.jpg" alt>
    </div>
    <div class="product">
      <div class="box" v-for="item in ringarr" :key="item.id">
        <div class="imgs">
          <img :src="item.img" alt>
        </div>
        <div class="text">
          <div class="title">{{item.title}}</div>
          <div class="prices">
            <i class="icon1">
              <img src="../../../assets/iconfont1.png" alt>
            </i>
            <div class="price">{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      ringarr: []
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/shuishiwodi"
      ).then(data => {
        this.ringarr.push(...data.data);
        console.log(this.ringarr);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ring {
  .classes {
    width: 200px;
    margin: 0 auto;
    padding: 10px 0;
    img {
      width: 100%;
    }
  }
  .product {
    display: flex;
    flex-wrap: wrap;
    // column-count:3;
    // column-gap:10px;
    padding: 10px 10px;

    justify-content: space-around;
    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10px;
      width: 30%;
      //   padding-right: 10px;
      .imgs {
        // width: 100px;
        img {
          width: 100%;
        }
      }
      .text {
        display: flex;
        flex-direction: column;
        .title {
          margin-top: 5px;
          text-align: left;
        }
        .prices {
          display: flex;
          justify-content:flex-start;
          // justify-content: flex-start;
          align-items: center;
          // width: 50px; 
          font-size: 12px;
          .icon1 {
            display: block;
            width: 20px;
            height: 1.25rem;
            margin-right: 3px;
            img {
              width: 100%;
            }
            
          }
          .price {
              // flex:1;
              font-weight: bold;
              font-size: 16px;
              color:#FFA100;
            }
        }
      }
    }
  }
}
</style>





