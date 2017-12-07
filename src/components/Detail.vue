<template>
  <div>
    <MHeader :back="true">添加</MHeader>
    <div class="content">
      <div>
        <label for="bookName">书名</label>
        <input type="text" id="bookName" v-model="book.bookName">
      </div>
      <div>
        <label for="bookCover">封面</label>
        <input type="text" id="bookCover" v-model="book.bookCover">
      </div>
      <div>
        <label for="bookInfo">详情</label>
        <input type="text" id="bookInfo" v-model="book.bookInfo">
      </div>
      <div>
        <label for="bookPrice">价格</label>
        <input type="text" id="bookPrice" v-model="book.bookPrice">
      </div>
      <div>
        <button @click="update">修改</button>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  import MHeader from '../base/MHeader.vue'
  export default {
    data(){
      return {
        book: {
          bookName: '',
          bookPrice: '',
          bookCover: '',
          bookInfo: ''
        }
      }
    },
    created(){
      this.getBook();
    },
    watch:{
        $route(){//监控路径参数的变化，参数变化后，重新校验看是否有这本书没有跳转回去
            this.getBook();
        }
    },
    methods: {
        getBook(){
          axios.get('/api/book?id=' + this.$route.params.id).then(res => {
            if (res.data.err) {
              this.$router.push('/list');
            } else {
              this.book = res.data.book;
            }
          })
        },
      update(){
         axios.put('/api/book?id='+this.book.id,this.book).then(res=>{
             this.$router.push('/list')
         })
      }
    },
    computed: {},
    components: {
      MHeader
    }
  }
</script>
<style scoped lang="less">
  .content {
    width: 90%;
    margin: 20px auto;
    label {
      float: left;
      height: 30px;
      line-height: 30px;
    }
    input {
      margin-left: 20%;
      display: block;
      width: 78%;
      height: 30px;
      margin-bottom: 10px;
    }
    .add {
      width: 75px;
      height: 50px;
      background: #c7252f;
      color: #fff;
      font-size: 20px;
      border-radius: 10px;
      outline: none;
      border: none;
    }
  }
</style>
