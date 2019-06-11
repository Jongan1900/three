<template>
  <div>
    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont">&#xe6ce;</i>
        <div>我的动态</div>
      </div>
      <div class="cg-r">
        <!-- <i class="iconfont"></i> -->
        <div class="iconfont">&#xe8a2;</div>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont">&#xe8d1;</i>
        <div>我的战绩</div>
      </div>
      <div class="cg-r">
        <!-- <i class="iconfont"></i> -->
        <div class="iconfont">&#xe8a2;</div>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont">&#xe873;</i>
        <div>我的小窝</div>
      </div>
      <div class="cg-r">
        <!-- <i class="iconfont"></i> -->
        <div class="iconfont">&#xe8a2;</div>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont">&#xe89e;</i>
        <div>谁看过我</div>
      </div>
      <div class="cg-r">
        <!-- <i class="iconfont"></i> -->
        <div class="iconfont">&#xe8a2;</div>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont">&#xe899;</i>
        <div>商城</div>
      </div>
      <div class="cg-r">
        <!-- <i class="iconfont"></i> -->
        <div class="iconfont">&#xe8a2;</div>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont">&#xe880;</i>
        <div>买金币</div>
      </div>
      <div class="cg-r">
        <!-- <i class="iconfont"></i> -->
        <div class="iconfont">&#xe8a2;</div>
      </div>
    </div>

    <div class="cg-discover">
      <div class="cg-l">
        <i class="iconfont">&#xe60d;</i>
        <div>邀请好友</div>
      </div>
      <div class="cg-r">
        <!-- <i class="iconfont"></i> -->
        <div class="iconfont">&#xe8a2;</div>
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
  height: 60px;
  .cg-l,
  .cg-r {
    display: flex;
    align-items: center;
    i {
      padding: 0 0.9375rem 0 0;
    }
    div {
      font-size: 1rem;
      line-height: 3.125rem;
      height: 3.125rem;
    }
  }
}
</style>
