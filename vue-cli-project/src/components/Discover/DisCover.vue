<template>
  <div>
    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont red">&#xe89e;</i>
        <div>玩物圈</div>
      </div>
      <div class="cg-r">
        <div class="cg-myicon"></div>
        <i class="iconfont">&#xe8a2;</i>
      </div>
    </div>

    <div class="line"></div>
    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont blue">&#xe898;</i>
        <div>好声音</div>
      </div>
      <div class="cg-r">
        <div class></div>
        <i class="iconfont">&#xe8a2;</i>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont skyblue">&#xe6d5;</i>
        <div>欢乐星球</div>
      </div>
      <div class="cg-r">
        <div class></div>
        <i class="iconfont">&#xe8a2;</i>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont red">&#xe6d4;</i>
        <div>热火朝天</div>
      </div>
      <div class="cg-r">
        <div class></div>
        <i class="iconfont">&#xe8a2;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.cg-discover {
  padding: 0 0.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #eee;
  height: 65px;
  .cg-l,
  .cg-r {
    display: flex;
    align-items: center;
    .red {
      color: red;
    }
    .blue {
      color: blue;
    }
    .skyblue{
        color:#66ccff;
    }
    .cg-myicon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ccc;
    }
    div {
      font-size: 1rem;
      line-height: 3.125rem;
      height: 3.125rem;
    }
  }
  .cg-l {
    i {
      padding: 0 0.9375rem 0 0;
    }
  }
}
</style>
