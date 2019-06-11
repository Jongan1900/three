<template>
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
      <i class="iconfont">&#xe63e;</i>
      <div class="iconfont">&#xe8a2;
</div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cg-ul {
  padding: 0 0.9375rem;
  margin-top: 0.625rem;
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
      padding-right: 0.625rem;
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
        font-size: 0.875rem;
      }
    }
  }
  .cg-li-r {
    display: flex;
    div {
      padding-left: 0.625rem;
    }
  }
}
</style>
