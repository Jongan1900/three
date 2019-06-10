<template>
    <ul class="cg-ul">
      <li class="cg-li">
        <div class="li-icon"><img src="../../assets/icon5.png" alt=""></div>
        <div class="li-text">
          <P>牧师</P>
          <P>{{new Date()}}</P>
        </div>
      </li>
      <li class="li-p">
          <p>恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财</p>
      </li>
      <li class="li-img">
        <img src="../../assets/information.png" alt="">
      </li>
    </ul>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.cg-ul {
   padding: 0 0.9375rem;
    // width: 100%;
    margin-top: 0.625rem;
    .cg-li {
      // border-bottom: 0.0625rem solid #eee;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .li-icon {
        width: 3.75rem;
        height: 3.75rem;
        // height: 30%;
        border-radius: 50%;
        background-color: #ddd;
        img{
          width: 100%;
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
        p:nth-child(1){
          font-weight: bold;
        }
      }
    }
    .li-p{
      text-align: left;
      font-size: 1rem;
      padding: 0.625rem 0 0.625rem 0.625rem;
    }
    .li-img{
      img{
        width: 100%;
      }
    }
  }
</style>
