<template>
  <div>
    <div class="photoinfo-header" >
      <h3>{{photoinfo.title}}</h3>
      <p>
        <span>发布者：{{photoinfo.author_name}}</span>
        <span>时间：{{photoinfo.date| timestr}}</span>
      </p>
      <hr>
      <!-- <div class="photoinfo-img">
          <img :src=photoinfo.thumbnail_pic_s alt="">
          <img :src=photoinfo.thumbnail_pic_s alt="">
          <img :src=photoinfo.thumbnail_pic_s alt="">
          <img :src=photoinfo.thumbnail_pic_s alt="">
      </div> -->
  <vueview></vueview>

      <comment-box></comment-box>
    </div>
    <div></div>
  </div>
</template>

<script>


// import vueview from '../subcomponents/phptoview.vue'
import vueview from '../subcomponents/phptoview1.vue'
import comment from "../subcomponents/comment.vue";
import Axios from "axios";


export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: [],
       
    };
  },
  methods: {
    getphotoinfo() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getnew"
      ).then(data => {
        //   console.log(data.data.result.data);
        for (var key of data.data.result.data) {
          if (key.uniquekey == this.id) {
            this.photoinfo = key;
            console.log(this.photoinfo);
          }
        }
      });
    }
  },
  created() {
    // console.log(this.$route.params.id);
    this.getphotoinfo();
  },
  components: {
    "comment-box": comment,
    vueview,
  }
};
</script>


<style lang="scss" scoped>
.photoinfo-header {
  h3 {
    text-align: center;
    // text-indent: 2em ;
  }
  p {
    display: flex;
    justify-content: space-between;
  }
  .photoinfo-img{
      overflow: hidden;
      padding:10px 10px;
      img{
          border: 1px solid #000;
          box-shadow: 0 0 4px #000;
          margin: 0 4px 8px 7px;
          width: 30%;
          height: 30%;
          float: left;
      }
  }
  .photoinfo-text {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
