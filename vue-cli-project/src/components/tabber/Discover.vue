<template>
  <div class="discover">
    <h1 class="header">发现</h1>
    <div class="line"></div>

    <discover></discover>
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import discover from '../Discover/DisCover.vue'
@Component({
  components: {
    // HelloWorld
    discover
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.discover {
  .line {
    background-color: #eee;
    height: 0.625rem;
  }
  h1 {
    padding: 0 0.9375rem;
    height: 6.25rem;
    line-height: 6.25rem;
    text-align: left;
  }
  
}
</style>


