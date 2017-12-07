<template>
  <div>
    <div v-if="isLoading">
      <div class="spinner"></div>
    </div>
    <div v-if="!isLoading &&!data.length">暂无数据 </div>
  </div>
</template>
<script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
      },
      data: {
        type: Array
      }
    },
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
<style scoped>
  .spinner {
    width: 40px;
    height: 40px;
    margin: 100px auto;
    background-color: #333;
    border-radius: 100%;
    -webkit-animation: scaleout 1.0s infinite ease-in-out;
    animation: scaleout 1.0s infinite ease-in-out;
  }

  @-webkit-keyframes scaleout {
    0% {
      -webkit-transform: scale(0.0)
    }
    100% {
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }

  @keyframes scaleout {
    0% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    }
    100% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }

</style>
