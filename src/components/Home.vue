<template>
  <div>
    <MHeader :back="true">这里是首页的内容！！！</MHeader>
    <div class="content">
      <Swiper :swiperSliders="sliders"></Swiper>
      <!--获取热门读书-->
      <loading :isLoading="isLoading" :data="hot"></loading>
      <template>
        <h3>热门图书</h3>
        <ul class="hot">
          <li v-for="h in hot">
            <img :src="h.bookCover" alt="">
            <span>{{h.bookName}}</span>
            <span>{{h.bookPrice}}</span>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import axios from 'axios'
  import loading from '../base/loading.vue'
  export default {
    data(){
      return {
        sliders: [],
        hot: [],
        isLoading: true
      }
    },
    created(){
      this.getSliders();
      setTimeout(this.getHot, 500);
//      this.getHot();
      /*   axios.get('/api/sliders').then((res) => {
       this.sliders = res.data;
       })*/
    },
    methods: {
      getSliders(){
        axios.get('/api/sliders').then((res) => {
          this.sliders = res.data;
        });
      },
      getHot(){
        axios.get('./api/hot').then((res) => {
          this.hot = res.data;
          this.isLoading = false;
          /*加载完毕 赋值false*/
        })
      }
    },
    computed: {},
    components: {
      MHeader,
      Swiper,
      loading
    }
  }
</script>
<style scoped lang="less">
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      width: 33.33%;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      justify-content: center;
      flex-direction: column;
      img {
        width: 80%;
        height: 120px;
      }
      :nth-child(3) {
        color: #2a2a2a;
        font-weight: 200;
      }
    }
  }
</style>
