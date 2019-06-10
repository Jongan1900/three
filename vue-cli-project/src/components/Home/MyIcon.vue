<template>
  <ul class="cg-ul">
    <li class="cg-li-l">
      <div class="li-icon">
        <img src="../../assets/icon1.png" alt>
      </div>
      <div class="li-text">
        <P>
          <span>蠢蠢蠢古</span>
          <i>2级</i>
        </P>
        <P>
          <i class="icon1">
            <img src="../../assets/iconfont1.png" alt>
          </i>
          <span>263</span>
          <i class="icon2">
            <img src="../../assets/iconfont2.png" alt>
          </i>
        </P>
      </div>
    </li>
    <li class="cg-li-r">
      <i>
        <img src="../../assets/iconfont3.png" alt>
      </i>
      <div>活动</div>
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
        display: flex;

        i {
          margin-left: 0.3125rem;
          display: block;
          background-color: yellow;
          box-shadow: 0 0 0.125rem rgb(221, 221, 17);
          font-size: 0.625rem;
          border-radius: 0.3125rem;
          width: 1.875rem;
          text-align: center;
          height: 0.9375rem;
          align-self: flex-end;
        }
      }
      p:nth-child(2) {
        font-size: 0.875rem;
        background-color: #eee;
        width: 6.25rem;
        border-radius: 2.5rem;
        height: 1.875rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon1 {
          padding-left: 0.1875rem;
          display: block;
          width: 1.25rem;
          height: 1.25rem;
          img {
            width: 100%;
          }
        }
        .icon2 {
          padding-left: 0.1875rem;
          display: block;
          width: 1.5625rem;
          height: 1.5625rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .cg-li-r {
    display: flex;
    flex-direction: column;
    i {
      img {
        width: 30px;
        height:30px;
      }
    }
    div {
      font-size: 14px;
    }
  }
}
</style>
