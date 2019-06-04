
<script lang="ts">
import Vue from "vue";
import request from "../../js/require";
export default Vue.extend({
  data() {
    return {
      shopList: [],
      timer: null,
      offsetHeight: 0
    };
  },
  created() {
    // 第一次请求
    this.getShopList();
    // M更新 V没更新
    // M更新了 但是V没更新 nextTick监听V更新了
    this.$nextTick(() => {
      console.log(this.$refs.list.offsetHeight);
      console.log(this.$refs.list.textContent);
      console.log(this.$refs.list.offsetTop);
      this.offsetHeight = this.$refs.list.offsetHeight;
    });
  },
  methods: {
    wmPoiScore(score) {
      return (score / 10).toFixed(1);
    },
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url: "https://www.easy-mock.com/mock/5cee26e4c7e0071827e4f109/shoplist"
      });
      this.shopList = [...this.shopList, ...data.data.data.shopList];
    }
  },
  mounted() {
    // 257
    // 懒加载
    window.addEventListener("scroll", () => {
      
      if (window.scrollY + 257 >= this.$refs.list.offsetHeight) {
        console.log("到底部了")
        this.getShopList()
      }
      // console.log(window.scrollY)
      // console.log(window.innerHeight)
      // console.log(this.$refs.list.offsetTop)
      // console.log(this.$refs.list.offsetHeight)
    });
    // window.onscroll = function(){

    // }
    // this.timer = window.setInterval(()=>{
    //   console.log(1)
    // },1000)
  },
  destroyed() {
    // window.onscroll = null;
    // clearInterval(this.timer)
  },
  // updated(){
  //   console.log(this.$refs.list.offsetHeight)
  //   console.log(this.$refs.list.textContent)
  // },
  watch: {
    shopList() {
      console.log(this.$refs.list.offsetHeight);
      console.log(this.$refs.list.textContent);
      // M更新->V没更新
      console.log(this.shopList);
    }
  }
});
</script>

<style lang="scss">