<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>

    <div class="cg-flxed">
      <router-link to="/home" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe68c;</i>
          <!-- <span class="span-ball"></span> -->
        </span>
        <span class="span-b">游戏</span>
      </router-link>
      <router-link to="/voice" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe88e;</i>
          <!-- <span class="span-ball"></span> -->
        </span>
        <span class="span-b">语音房</span>
      </router-link>
      <router-link to="/information" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe6c7;</i>
          <!-- <span class="span-ball"></span> -->
        </span>
        <span class="span-b">消息</span>
      </router-link>
      <router-link to="/discover" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe8e7;</i>
          <span class="span-ball"></span>
        </span>
        <span class="span-b">发现</span>
      </router-link>
      <router-link to="/mine" class="cg-box">
        <span class="span-t">
          <i class="span-icon iconfont">&#xe6d2;</i>
          <!-- <span class="span-ball"></span> -->
        </span>
        <span class="span-b">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //  tz(id){
    // this.$router.push("/home/phoneinfo/"+id)
    // this.$router.push({path:"/home/phoneinfo/"+id})
    // this.$router.push({name:"phoneinfo",params:{id}})
    // },
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    text-decoration: none;
  }
  margin-bottom: 3.4375rem;
  .line {
    height: 0.625rem;
    background-color: #f5f5f5;
  }
  .home {
    padding: 0 0.9375rem;
  }
  .myself {
    background-color: #ccc;
    width: 100%;
    height: 6.25rem;
  }
  
  
  
  .cg-flxed {
    position: fixed;
    height: 2.8125rem;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    .cg-box {
      width: 15%;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      // background-color: #ccc;
      .span-t {
        // height: 1.875rem;
        display: block;
        position: relative;
        color:#000;
        // font-size: 1.875rem;
        .span-ball {
          position: absolute;
          height: 0.75rem;
          width: 0.75rem;
          background-color: red;
          border-radius: 50%;
          top: 0rem;
          right: 0.625rem;
        }
      }
      .span-b {
        display: block;
        height: 0.625rem;
        font-size: 0.625rem;
      }
    }
  }
}
</style>
