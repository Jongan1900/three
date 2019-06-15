<template>
  <div class="mydata">
    <allheader class="allheader"></allheader>
    <div class="fixed">
      <div class="line"></div>
      <myself></myself>

      <div class="mymessage">
        <div class="msg">最近玩的这个游戏，还不错安利给大家</div>
        <div class="myimg">
          <img src="../../../assets/relax1.png" alt>
        </div>
        <div class="icon">
          <i class="iconfont">&#xe873;</i>
          <i class="iconfont">&#xe892;</i>
        </div>
      </div>
      <div class="line"></div>
      <div class="mymessage">
        <div class="msg">最近玩的这个游戏，还不错安利给大家</div>
        <div class="myimg">
          <img src="../../../assets/relax2.png" alt>
        </div>
        <div class="icon">
          <i class="iconfont">&#xe873;</i>
          <i class="iconfont">&#xe892;</i>
        </div>
      </div>
      <div class="line"></div>
      <div class="mymessage">
        <div class="msg">最近玩的这个游戏，还不错安利给大家</div>
        <div class="myimg">
          <img src="../../../assets/relax1.png" alt>
        </div>
        <div class="icon">
          <i class="iconfont">&#xe873;</i>
          <i class="iconfont">&#xe892;</i>
        </div>
      </div>
      <div class="line"></div>
      <div class="mymessage">
        <div class="msg">最近玩的这个游戏，还不错安利给大家</div>
        <div class="myimg">
          <img src="../../../assets/relax1.png" alt>
        </div>
        <div class="icon">
          <i class="iconfont">&#xe873;</i>
          <i class="iconfont">&#xe892;</i>
        </div>
      </div>
      <div class="line"></div>
    </div>
   
  </div>
</template>


<script>
import allheader from "./AllHeader.vue";
import myself from "../MineSelf.vue";
export default {
  components: {
    allheader,
    myself
  }
};
</script>

<style lang="scss" scoped>
.mydata {
  display: flex;
  flex-direction: column;
 flex:1;
  .allheader {
    height: 40px;
  }
  .fixed {
    flex: 1;
    overflow-y:auto;

    .mymessage {
      display: flex;
      flex-direction: column;
      padding: 10px;
      .msg {
        color: #000;
        font-size: 14px;
        text-align: left;
        margin-bottom: 10px;
      }
      .myimg {
        img {
          width: 100%;
        }
        margin-bottom: 10px;
      }
      .icon {
        display: flex;
        justify-content: flex-start;
        i {
          padding-right: 50px;
        }
      }
    }
  }
  
}
</style>
