<template>
  <div class="mine">
    <div class="header">
      <h1>我的</h1>
    </div>

    <mineself></mineself>
    <div class="line"></div>
   <minediscover></minediscover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import mineself from '../Mine/MineSelf.vue'
import minediscover from '../Mine/MineDisCover.vue'
@Component({
  components: {
    mineself,minediscover
    // HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.mine {
  .header {
    height: 6.25rem;
    text-align: left;
    padding: 0 .625rem;
    line-height: 6.25rem;
  }
  
 
}
</style>
