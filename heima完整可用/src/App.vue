<template>
  <div>
    <h1>APPPPPP</h1>
    <router-link to="/account">ACC</router-link>
    <router-link to="/goodlist">GOOD</router-link>
    <mybtn type="default" @click="getList">点我提示</mybtn>
    <mybtn type="primary" @click="getList">点我提示</mybtn>
    <mybtn type="danger" @click="getList">点我提示</mybtn>
    <mybtn type="primary" plain @click="getList">点我提示</mybtn>
    <!-- glyphicon glyphicon-heart -->
    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action active">Active item</button>
      <button type="button" class="list-group-item list-group-item-action">Item</button>
      <button type="button" class="list-group-item list-group-item-action disabled">Disabled item</button>
    </div>

    <button type="button" class="mui-btn mui-btn-block">Block button</button>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      toastInstanse: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      if (this.toastInstanse) {
        return;
      }
      this.show(),
        setTimeout(() => {
          this.toastInstanse.close();
          this.toastInstanse = null;
        }, 1000);
    },
    show() {
      const arr1 = [
        "glyphicon glyphicon-heart",
        "glyphicon glyphicon-sound-5-1",
        "glyphicon glyphicon-eye-open",
        "glyphicon glyphicon-tree-conifer"
      ];
      let i = parseInt(Math.random() * arr1.length);
      console.log(i);
      this.toastInstanse = Toast({
        message: "提示",
        position: "center",
        duration: -1,
        // iconClass: "glyphicon glyphicon-heart",
        iconClass: arr1[i],
        className: "mytoast"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;

  h1 {
    text-align: center;
    background-color: blue;
  }
  a {
    margin: 0 auto;
    width: 50%;
    height: 50px;
    background-color: #66ccff;
    display: block;
    float: left;
    text-align: center;
    line-height: 50px;
  }
}
</style>

