<template>
  <ul>
    <router-link to="/" exact tag="li"><i class="iconfont icon-house"></i>首页</router-link>
    <!--<router-link to="/home" tag="li"><i class="iconfont icon-house"></i>首页</router-link>-->
    <router-link to="/list" tag="li"><i class="iconfont icon-menu"></i>列表页</router-link>
    <router-link to="/add" tag="li"><i class="iconfont icon-add"></i>添加页</router-link>
    <router-link to="/collect" tag="li"><i class="iconfont icon-star"></i>收藏页</router-link>
  </ul>
</template>
<!--flex布局
  display:flex
  flex:1;均分
  flex-direction:row(默认) ，column
  justify-content：center水平居中
  align-item：center 垂直居中
-->
<script>
  export default {
    data(){
      return {msg: 'hello'}
    },
    created(){
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">/*如果要使用less语法 需要告知*/
ul {
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 10px #999;
  li {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .router-link-active{
    /*text-shadow: 1px 1px 1px yellow;*/
    color:  #c7252f;
    background: #f7f7f7;
  }
  i{
    font-size: 24px;
  }
}


</style>
