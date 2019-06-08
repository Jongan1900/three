<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postmsg">发表评论</mt-button>

    <div class="cmt-list" v-for="(item,index) in pingL" :key="index">
       <div class="cmt-item" > 
        <div class="cmt-title">
          <span>第{{index+1}}楼&nbsp;&nbsp;用户：{{item.content.substr(0,3)}}&nbsp;&nbsp;</span> 
          <span>发表时间：{{item.updatetime| timestr}}</span> 
        </div>
        <div class="cmt-body">
         {{item.content}}
        </div>
      </div> 

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button> 
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Axios from 'axios';
export default {
  data(){
    return {
      pingL:[],
      msg:'',
      // updatetime:"2014-12-16 23:53:48",

    }
  },
  created () {
    this.getMore()
  },
  methods:{
    getMore(){
      Axios.get('https://www.easy-mock.com/mock/5cee272db198552aa3fde20d/example/xiaohua').then((data)=>{
        // console.log(data.data.result.data);
          // this.pingL=[...this.pingL,...data.data.result.data];
          this.pingL=this.pingL.concat(data.data.result.data)
          console.log(this.pingL);
      })
    },
    postmsg(){
      if(this.msg.trim()==""){
        Toast("请输入内容哦");
        this.msg='';
        return 
      }
      var newmsg={content:this.msg,updatetime:new Date()}
      this.pingL.unshift(newmsg);
      this.msg="";
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
        display: flex;
        justify-content: space-between;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
