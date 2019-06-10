<template>
  <div class="relaxgame">
      <p class="game-nav">
        <span>休闲桌游</span>
        <!-- <a href @click.prevent>All</a> -->
      </p>
      <div class="module-one"><img src="../../assets/relax1.png" alt=""></div>
      <div class="module-one"><img src="../../assets/relax2.png" alt=""></div>
      <div class="module-two">
        <div><img src="../../assets/relax3.png" alt=""></div>
        <div><img src="../../assets/relax4.png" alt=""></div>
      </div>
      <div class="module-two">
        <div><img src="../../assets/relax5.png" alt=""></div>
        <div><img src="../../assets/relax6.png" alt=""></div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.relaxgame {
    margin-bottom: 0.9375rem;
    .game-nav {
      // padding: 0 0.625rem;
      display: flex;
      justify-content: space-between;
      height: 1.875rem;
      align-items: center;
    }
    .module-one {
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
      background-color: #ccc;
      border: 0.0625rem solid #fff;
      border-radius: 0.3125rem;
      // height: 5rem;
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
    .module-two {
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
      display: flex;
      justify-content: space-between;
      div {
        // height: 5rem;
        width: 48%;
        background: #000;
        border-radius: 0.3125rem;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>
