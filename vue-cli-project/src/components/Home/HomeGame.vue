<template>
  <div class="homegame">
      <p class="game-nav">
        <span>对战小游戏</span>
        <a href @click.prevent>
          <p>全部</p>
          <i class="iconfont">&#xe8a2;</i>
        </a>
      </p>
      <div class="gameimg">
        <div class="gameimgbox">
          <span class="span-t"> <img src="../../assets/game1.png" alt=""></span>
          <span class="span-b">坦克大战</span>
        </div>
        <div class="gameimgbox">
          <span class="span-t"><img src="../../assets/game2.png" alt=""></span>
          <span class="span-b">斗兽棋</span>
        </div>
        <div class="gameimgbox">
          <span class="span-t"><img src="../../assets/game3.png" alt=""></span>
          <span class="span-b">五子棋</span>
        </div>
        <div class="gameimgbox">
          <span class="span-t"><img src="../../assets/game4.png" alt=""></span>
          <span class="span-b">疯狂飞行棋</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.homegame {
    .game-nav {
      // padding: 0 10px;
      display: flex;
      justify-content: space-between;
      height: 1.875rem;
      align-items: center;
      a{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .gameimg {
      display: flex;
      justify-content: space-around;
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
      width: 100%;
      overflow: hidden;
      .gameimgbox {
        width: 23%;
        .span-t,
        .span-b {
          display: block;
          border: 0.0625rem solid #fff;
          font-size: 0.75rem;
        }
        .span-t {
          border-radius: 0.9375rem 0.9375rem 0 0;
          border-bottom: none;
          img {
            width: 100%;
            display: block;
          }
        }
        .span-b {
          border-radius: 0 0 0.9375rem 0.9375rem;
          height: 1.875rem;
          line-height: 1.875rem;
          font-weight: bold;
          border: 0.0625rem solid #eee;
          text-align: center;
        }
      }
    }
  }
</style>
