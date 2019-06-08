<template>

    <div class="mui-numbox" data-numbox-min="1" >
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countchange" ref="numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>

</template>



<script>
import mui from '../../../lib/mui/js/mui.js'
export default {
    data() {
        return {
           
        }
    },
    mounted() {
        mui(".numbox").numbox()
        
    },
    methods: {
        countchange(){
            // console.log(this.$refs.numbox.value);
            this.$emit('getshopnum',parseInt(this.$refs.numbox.value))
            console.log(this.max)
        }
    },
    props:["max"],
    watch:{
        max:function(newval,oldval){
            console.log(newval);
          mui(".mui-numbox")
          .numbox()
          .setOption("max",newval);
        }
    }

};
</script>

<style lang="scss" scoped>
</style>
