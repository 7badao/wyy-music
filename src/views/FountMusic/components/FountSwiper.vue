<template>
  <div class="swiper_my">
    <div class="block">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item v-for="(item,index) in swiperArr" :key="index">
          <img :src="item.imageUrl" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['swiperArr'],
  data () {
    return {
      // 轮播图数据
      swiperArr: null
    }
  },
  methods: {
    async getInfo () {
      const res = await this.$http.get('/banner')
      console.log(res, 'lunbotu')
      if (res.data.code === 200) {
        this.swiperArr = res.data.banners
        console.log(this.swiperArr)
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
.block {
  width: 100%;
  margin: 0 auto;
}
.swiper_my {
  width: 100%;
  background-color: #ccc;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
