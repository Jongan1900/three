<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(val,key,i)  in banner" :key="i" >
        <img :src="val" alt :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["banner", "isfull"]
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 300px;
  .mint-swipe-item {
    text-align: center;
  }
  img {
     
    height: 100%;
  }
}
.full {
  width: 100%;
}
</style>
