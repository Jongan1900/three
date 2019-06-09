<template>
  <div class="shopcar-container">
    
    <div class="goods-list">

      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
            <mt-switch v-model="$store.getters.getselected[item.id]" @change="selectedbtn(item.id,$store.getters.getselected[item.id])"></mt-switch> 
            <img :src="item.img">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.price}}</span>
                <numbox :shopsnum="item.count" :goodsid="item.id"></numbox>
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>

					</div>
				</div>
			</div>

    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left"> 
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{$store.getters.gettotal.selectednum}}</span> 件， 总价 <span class="red">￥{{$store.getters.gettotal.total}}</span></p>
            </div>
             <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>


      <p>{{ $store.getters.getselected }}</p>

  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox.vue";

export default {
  data() {
    return {
      goodslist: [] // 购物车中所有商品的数据
    };
  },
  created() {
      this.getlist()
  },
  methods: {
      getlist(){
        this.goodslist=this.$store.state.cart
        console.log(this.goodslist);
      },
      remove(id,i){
        this.goodslist.splice(i,1);
        this.$store.commit("removecart",id)
      },
      selectedbtn(id,val){
        console.log(id,val);
        this.$store.commit('updataselected',{id,selected:val})
      } 
    
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      display: block;margin-right: 5px;
    }
    h1 {
      font-size: 13px;
      text-align: left;
    }
    p{
      margin-bottom: 0;
      // display: flex;
     justify-content:flex-end;
    }
    .info {
      display: flex;
      // justify-content: space-around;
      flex-direction: column;
      
     
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
