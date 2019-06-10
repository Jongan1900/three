<template>
  <div class="voice">
    <voiceheader></voiceheader>
    <div class="voiceimg">
      <img src="../../assets/voice.png" alt>
    </div>

    <div class="line"></div>
    <!-- 该滑块组件还没有导入 -->
    <voiceswipe></voiceswipe>

    <voicelist></voicelist>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import voicelist from "../Voiceroom/VoiceList.vue";
import voiceswipe from "../Voiceroom/VoiceSwipe.vue";
import voiceheader from "../Voiceroom/VoiceHeader.vue";
@Component({
  components: {
    voicelist,
    voiceswipe,voiceheader
  }
})
export default class voice extends Vue {}
</script>

<style lang="scss" scoped>
.voice {
  
  .line {
    width: 100%;
    height: 0.625rem;
    background-color: #f5f5f5;
  }
  .voiceimg {
    padding: 0.625rem 0.9375rem;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>

