<template>
  <div class="header">
    <div class="header-l">
      <i class="iconfont">&#xe8b5;</i>
    </div>
    <div class="header-m">
      <router-link to="/discover/friendsg" class="pyq">朋友圈</router-link >
      <router-link to="/discover/gc" >广场</router-link >
    </div>
    <div class="header-r">
      <i class="iconfont">
        &#xe8ac;
        <span class="ball"></span>
      </i>
      <i class="iconfont">&#xe875;</i>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0 0.9375rem;
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-m {
    display: flex;
    a:nth-child(2) {
      margin-left: 0.9375rem;
    }
    
    
  }
  
  .header-r {
    display: flex;
    align-items: center;
    i {
      font-size: 20px;
    }
    i:nth-child(1) {
      position: relative;
      padding-right: 0.4375rem;
      .ball {
        position: absolute;
        background-color: red;
        width: 0.625rem;
        height: 0.625rem;
        top: 0;
        right: 0.25rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
