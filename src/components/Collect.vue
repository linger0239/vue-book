<template>
  <div>
    <div>
      <MHeader>列表</MHeader>
      <div class="content">
        <ul>
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <span>{{book.bookPrice}}</span>
              <div>
                <router-link :to="{name:'Detail',params:{id:book.id}}">详情</router-link>
                <a href="javascript:0" @click="remove(book.id)">删除</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import {mapState} from 'vuex'
  import axios from 'axios'

  export default {
    data(){
      return {books: [], isCollect: false,}
    },
    created(){
      this.getBooks()
    },
    methods: {
      getBooks(){
        this.books = this.collects;
      }
    },
    computed: {
      ...mapState(['collects'])
    },
    components: {
      MHeader
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
