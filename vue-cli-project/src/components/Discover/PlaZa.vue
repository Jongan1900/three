<template>
  <div>
    <ul class="cg-ul">
      <li class="li-img">
        <img src="../../assets/information.png" alt>
      </li>
    </ul>
    <div class="line"></div>

        <dynamic></dynamic>
     



  </div>
</template>

<script>
import dynamic from './PiaZaDynamic.vue'
export default {
    components:{
        dynamic,
    }
};
</script>
<style lang="scss" scoped>
.cg-ul {
  padding: 0 0.9375rem;
  // width: 100%;
  margin-top: 0.625rem;

  .li-p {
    text-align: left;
    font-size: 1rem;
    padding: 0.625rem 0 0.625rem 0.625rem;
  }
  .li-img {
    img {
      width: 100%;
    }
  }
}


</style>


