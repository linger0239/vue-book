<template>
  <div>
    <MHeader>添加</MHeader>
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
        <button @click="add" >添加</button>
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
    },
    methods: {
      add(){
        axios.post('/api/book', this.book).then(res => {//response.end后执行then
          this.$router.push('/list')
        })
      }
    },
    computed: {},
    components: {MHeader}
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
