<template>
  <div class="information">
    <ifheader></ifheader>
    <div class="line"></div>

    <ifmsg></ifmsg>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ifheader from '../Information/InForHeader.vue';
import ifmsg from '../Information/InForMessage.vue';

@Component({
  components: {
    // HelloWorld
    ifheader,ifmsg
  }
})
export default class Home extends Vue {}
</script>


<style lang="scss" scoped>
.information {
   
  .line {
    background-color: #eee;
    height: 0.625rem;
  }
 
  
}
</style>

