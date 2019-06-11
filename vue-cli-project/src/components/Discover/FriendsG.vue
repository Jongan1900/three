<template>
  <div class="information">
    <fsheader></fsheader>
   

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import fsheader from './FriendsHeader.vue'
import fslist from './FriendsList.vue'
@Component({
  components: {
    // HelloWorld
    fsheader,fslist
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

