<template>
  <div>
    {{$store.state.count}}
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>
<script>
  import{mapState, mapMutations} from 'vuex'//mapState是语法糖
 /* console.log(mapState['count']);//=>{count:function}
  console.log(mapMutations['increment']);//=>{increment:function}
*/
  export default {
    data(){
      return {msg: 'hello'}
    },
    created(){
    },
    methods: {
      ...mapMutations(['increment','decrement']),
      add(){
          this['increment'](2);
          this.increment(2);
//        this.$store.commit('increment', 2);
      },
      minus(){
        this['decrement'](2);
      }
    },
    computed: {
      ...mapState(['count']),//将count直接定义在属性上，相当于把store里的count映射到组件的count中
    },
    components: {}
  }
</script>
<style scoped>

</style>
