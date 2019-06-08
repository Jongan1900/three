<template>
  <div class="godesc">
    <h2>{{phoneinfolist.skuName}}</h2>
    <hr>
    <p class="text">{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}</p>
    <img :src="phoneinfolist.skuThumbImgUrl" alt>
    <p class="text">{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}</p>
    <p class="text">{{phoneinfolist.scheme}}{{phoneinfolist.scheme}}{{phoneinfolist.scheme}}{{phoneinfolist.scheme}}{{phoneinfolist.scheme}}{{phoneinfolist.scheme}}{{phoneinfolist.skuName}}{{phoneinfolist.skuName}}</p>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      phoneinfolist: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getphone"
      ).then(data => {
        let phonelist = data.data.goodsList;
        for (var item of phonelist) {
          if (item.goodsId == this.id) {
            this.phoneinfolist = item;
            console.log(item);
          }
        }
        // console.log(this.phoneinfolist);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.godesc {
    padding:10px;
    .text{
        text-indent: 2em
    }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
