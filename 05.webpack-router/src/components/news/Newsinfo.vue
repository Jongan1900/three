<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{infoObj.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发布者:{{infoObj.author_name}}</span>
      <span>发表时间：{{ infoObj.data | timestr }}</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content">{{infoObj.message}}</div>
    <div class="content">{{infoObj.message}}</div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
import Axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      infoObj: {}
    };
  },
  components:{
      'comment-box':comment,
  },
  created() {
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getnew_c"
      ).then(data => {
        let newsinfo = data.data.result.data;
        for (var key of newsinfo) {
          if (key.uniquekey == this.id) {
            this.infoObj = key;
            console.log(this.infoObj);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  overflow: hidden;
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    padding: 0 50px;
    // width: 200px;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    text-indent: 2em;
     img {
      width: 100%;
    }
  }
}
</style>
