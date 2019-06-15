<template>
  <div>
       <div class="classes">
      <img src="../../../assets/malltitle1.jpg" alt>
    </div>
    <div class="product">
      <div class="box">
        <div class="imgs">
          <img src="../../../assets/shop1.jpg" alt>
        </div>
        <div class="text">
          <div class="title">棕意你</div>
          <div class="prices">
            <div class="price">活动获得</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgs">
          <img src="../../../assets/shop2.jpg" alt>
        </div>
        <div class="text">
          <div class="title">欢腾龙舟</div>
          <div class="prices">
            <div class="price">活动获得</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgs">
          <img src="../../../assets/shop3.jpg" alt>
        </div>
        <div class="text">
          <div class="title">终相守</div>
          <div class="prices">
            <div class="price">活动获得</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgs">
          <img src="../../../assets/shop4.jpg" alt>
        </div>
        <div class="text">
          <div class="title">520（男）</div>
          <div class="prices">
            <div class="price">活动获得</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgs">
          <img src="../../../assets/shop5.jpg" alt>
        </div>
        <div class="text">
          <div class="title">我还是个宝宝</div>
          <div class="prices">
            <div class="price">活动获得</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgs">
          <img src="../../../assets/shop6.jpg" alt>
        </div>
        <div class="text">
          <div class="title">初相识</div>
          <div class="prices">
            <div class="price">活动获得</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
 .classes {
  width: 200px;
  margin: 0 auto;
  padding: 10px 0;
  img {
    width: 100%;
  }
 }
.product {
  display: flex;
  flex-wrap: wrap;
  // column-count:3;
  // column-gap:10px;
  padding: 10px 10px;

  justify-content: space-around;
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 30%;
    //   padding-right: 10px;
    .imgs {
      // width: 100px;
      img {
        width: 100%;
      }
    }
    .text {
      .title {
        margin-top: 5px;
        text-align: left;
      }
      .prices {
        width: 50px;
        border: 1px solid #66cc66;
        color: #66cc66;
        font-size: 12px;
      }
    }
  }
}
</style>
