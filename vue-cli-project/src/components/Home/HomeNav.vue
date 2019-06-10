<template>
    <nav class="nav">
      <div>
        <span><img src="../../assets/icon1.png" alt=""><i class="icon-hg"></i></span>
        <p>排行榜</p>
      </div>
      <div>
        <span><img src="../../assets/icon2.png" alt=""></span>
        <p>任务</p>
      </div>
      <div>
        <span><img src="../../assets/icon3.png" alt=""></span>
        <p>桌游房间</p>
      </div>
      <div>
        <span><img src="../../assets/icon4.png" alt=""></span>
        <p>好友在线</p>
      </div>
    </nav>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: space-around;
    padding: 0.3125rem;
    margin: 0.625rem 0 0.625rem 0;
    overflow: hidden;
    p {
      font-size: 0.75rem;
      padding: 0.3125rem 0;
    }
    span {
      display: block;
      border: 0.0625rem solid #fff;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      position: relative;

      img {
        display: block;
        width: 100%;
      }
      .icon-hg {
        display: block;
        position: absolute;
        top: -0.6875rem;
        left: -0.875rem;
        background-image: url("../../assets/icon0.fw.png");
        background-size: contain;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
</style>
