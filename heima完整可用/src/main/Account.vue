<template>
  <div>
    <h2>account</h2>
    <router-link to="/account/login">login</router-link>
    <router-link to="/account/register">register</router-link>
    <router-view></router-view>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  width: 50%;height: 50px;
  a{
    color:blue
  }
  a:hover{
    color:peru
  }
  
}
</style>







