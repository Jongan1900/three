<template>
  <div class="mine">
    <div class="header">
      <h1>这是Mine</h1>
    </div>

    <ul class="cg-ul">
      <li class="cg-li-l">
        <div class="li-icon">
          <img src="../../assets/icon1.png" alt>
        </div>
        <div class="li-text">
          <P>蠢蠢蠢古</P>
          <P>用户ID:</P>
        </div>
      </li>
      <li class="cg-li-r">
        <i>2</i>
        <div>3</div>
      </li>
    </ul>
    <div class="line"></div>
    <div class="cg-discover">
      <div class="cg-l">
        <i class="icon-fabu-13"></i>
        <div>玩物圈</div>
      </div>
      <div class="cg-r">
        <i>2</i>
        <div>></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.mine {
  .header {
    height: 6.25rem;
    text-align: left;
    padding: 0 .625rem;
    line-height: 6.25rem;
  }
  .cg-ul {
    padding: 0 .9375rem;
    margin-top: .625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cg-li-l {
      // border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .li-icon {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        padding-right: .625rem;
        img {
          width: 100%;
          display: block;
        }
      }
      .li-text {
        height: 5rem;
        // background-color: red;
        width: 70%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:nth-child(1) {
          font-weight: bold;
        }
        p:nth-child(2) {
          font-size: .875rem;
        }
      }
    }
    .cg-li-r {
      display: flex;
      div {
        padding-left: .625rem;
      }
    }
  }
  .cg-discover {
    padding: 0 .9375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .0625rem solid #eee;
    .cg-l,
    .cg-r {
      display: flex;
      align-items: center;
      i {
        padding: 0 .9375rem 0 0;
      }
      div {
        font-size: 1rem;
        line-height: 3.125rem;
        height: 3.125rem;
      }
    }
  }
}
</style>
