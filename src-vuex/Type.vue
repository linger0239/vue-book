<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {
          ...mapState(['count'])
        },
        components: {}
    }
</script>
<style scoped>

</style>
