<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content">
      <Loading :isLoading="isLoading" :data="books"></Loading>
      <ul v-if="!isLoading && books.length">
        <li v-for="book in books">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <span>{{book.bookPrice}}</span>
            <div>
              <router-link :to="{name:'Detail',params:{id:book.id}}">详情</router-link>
              <a href="javascript:0" @click="remove(book.id)">删除</a>
              <a href="javascript:0" @click="add(book)" :isCollect="isCollect" >{{msg}}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import axios from 'axios'
  import Loading from '../base/loading.vue'
  import {mapMutations} from 'vuex';//宏：快捷键
  import * as Types from '../vuex/mutation-types';//宏：快捷键
  export default {
    data(){
      return {books: [], isLoading: false, isCollect: false,msg:'收藏'}
    },
    created(){
      this.getBooks()
    },
    activated(){
      this.getBooks();
    },
    methods: {
      ...mapMutations([Types.ADD_COLLECT]),//将mutation中的方法映射到组件内部
      add(book){
        this.isCollect = !this.isCollect;
        this[Types.ADD_COLLECT](book);
        this.$router.push('/collect');//跳转到list页面
      },
      getBooks(){
        axios.get('/api/book').then((res) => {
          this.books = res.data;
          this.isLoadding = false;//数据是否加载成功
        })
      },
      remove(id){
        axios.delete('/api/book?id=' + id).then(res => {
          this.books = this.books.filter(item => item.id !== id);
        });
      }
    },
    computed: {},
    components: {
      MHeader,
      Loading,
    }
  }
</script>
<style scoped lang="less">
  ul {
    li {
      display: flex;
      margin: 10px;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      img {
        width: 100px;
        height: 120px;
      }
      div {
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: row;
          a {
            padding: 5px;
          }
        }
      }
    }
  }
</style>
