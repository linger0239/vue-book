<template>
  <div class="header">
    <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
    <!--将使用MHeader时夹着的内容传递到当前组件的slot中-->
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      back: {
        type: Boolean,
        default:false/*默认是false*/
      }
    },
    data(){
      return {msg: 'hello'}
    },
    created(){
    },
    methods: {
      go(){
//        this.$router.go(-1);
        this.$router.back();/*同样实现后退功能*/
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .header {
    position: fixed;
    width: 100%;
    background: #c7252f;
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    i {
      position: absolute;
      left: 20px;
    }
  }
</style>
