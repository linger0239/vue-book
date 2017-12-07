<template>
  <div>
    <Tab></Tab><!--3.使用-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
  /*1引用*/
  export default {
    components: {
      /*2注册*/
      Tab
    }
  }
</script>

<style>

  /*默认的公用样式，如果样式较多，可以抽离出来通过@import引入样式*/
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none
  }

  ul li {
    list-style: none
  }

  input, button {
    -webkit-appearance: none
  }

  html, body {
    font-size: 14px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .content {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 60px;
    overflow-y: scroll;
  }


</style>
