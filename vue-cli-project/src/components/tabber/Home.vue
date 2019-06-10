<template>
  <div class="home">
    <myicon></myicon>
    <homenav></homenav>
    <homegame></homegame>
    <relaxgame></relaxgame>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import myicon from '../Home/MyIcon.vue'
import homenav from '../Home/HomeNav.vue'
import homegame from '../Home/HomeGame.vue'
import relaxgame from '../Home/RelaxGame.vue'
@Component({
  components: {
    // HelloWorld 
    myicon,homenav,homegame,relaxgame
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>

</style>

