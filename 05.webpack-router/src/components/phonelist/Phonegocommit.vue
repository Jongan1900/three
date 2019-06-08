<template>
    <div>
      <comment-box></comment-box>
    </div>
</template>

<script>
import Commentss from '../subcomponents/Commentss.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
       "comment-box":Commentss,
    }
}
</script>

<style lang="scss" scoped>

</style>
