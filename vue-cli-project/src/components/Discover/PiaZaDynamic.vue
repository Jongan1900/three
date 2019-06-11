<template>
  <div>
    <div class="header-m">
      <router-link to="/discover/gc/dynamic" class="pyq" tag="div">动态</router-link>
      <router-link to="/discover/gc/theme" tag="div">话题</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.header-m {
  padding: 0 0.9375rem;
  height: 3.75rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  a:nth-child(2) {
    margin-left: 0.9375rem;
  }
}
</style>
