<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSliders"  :key="slide">
      <img :src="slide" alt="" class="img"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<style scoped>
  img{
    width: 100%;
  }
</style>
<script>
  export default {
    props: {
      swiperSliders:{
            type:Array,default:[]
        }
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: 3500,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        },
      }
    }
  }
</script>
