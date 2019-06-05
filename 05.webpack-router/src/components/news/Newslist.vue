<template>
  <div>
    <!-- <h3> 新闻资讯页面</h3> -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.uniquekey">
        <router-link :to="'/home/newsinfo/'+ item.uniquekey">
          <img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
          <div class="mui-media-body">
              <!-- item.uniquekey -->
            <h3>{{item.title}}</h3>
            <p class="mui-ellipsis">
              <span>{{item.author_name}}</span>
              <span>发布时间:{{item.data|timestr()}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getnewslist();
  },
  methods: {
    getnewslist() {
      Axios.get(
        "https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/getnew"
        // "http://v.juhe.cn/toutiao/index"
      ).then(data => {
        console.log(data.data.result.data);
        this.newslist = data.data.result.data;
        console.log(this.newslist);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h3 {
      font-size: 16px;
    }
    .mui-ellipsis {
      display: flex;
      color: #66ccff;
      justify-content: space-between;
    }
  }
}

</style>
