<template>
  <div class="comPage">
    <div class="nav">
      <div class="navBox">
        <el-tabs v-model="activeName">
          <el-tab-pane>
            <li class="labelInfo" slot="label">
              <span :class="activeName==='0'?'tabInfo':''">推荐</span>
            </li>
            <!-- 轮播图 -->
            <fount-swiper></fount-swiper>
            <!-- 歌单信息 -->
            <fount-main :personalLizedArr="personalLizedArr"></fount-main>
          </el-tab-pane>
          <el-tab-pane>
            <li class="labelInfo" slot="label">
              <p>
                <span :class="activeName==='1'?'tabInfo':''">排行榜</span>
              </p>
            </li>
          </el-tab-pane>
          <el-tab-pane>
            <li class="labelInfo" slot="label">
              <p>
                <span :class="activeName==='2'?'tabInfo':''">歌单</span>
              </p>
            </li>
          </el-tab-pane>
          <el-tab-pane>
            <li class="labelInfo" slot="label">
              <p>
                <span :class="activeName==='3'?'tabInfo':''">主播电台</span>
              </p>
            </li>
          </el-tab-pane>
          <el-tab-pane>
            <li class="labelInfo" slot="label">
              <p>
                <span :class="activeName==='4'?'tabInfo':''">歌手</span>
              </p>
            </li>
          </el-tab-pane>
          <el-tab-pane>
            <li class="labelInfo" slot="label">
              <p>
                <span :class="activeName==='5'?'tabInfo':''">新碟上架</span>
              </p>
            </li>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import FountSwiper from './components/FountSwiper'
import FountMain from './components/Fount-Main'
export default {
  data () {
    return {
      activeName: '0',
      personalLizedArr: null
    }
  },
  methods: {
    async getPersonalized () {
      const res = await this.$http.get('/personalized')
      console.log(res)
      if (res.data.code === 200) {
        this.personalLizedArr = res.data.result
      }
    }
  },
  mounted () {
    this.getPersonalized()
  },
  components: {
    FountSwiper,
    FountMain
  }
}
</script>

<style lang="less" scoped>
.tabZw {
  width: 157px;
}
/deep/.el-tabs__header.is-top {
  height: 35px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 150px;
}
/deep/.el-tabs__nav-scroll {
  height: 35px;
}
/deep/.el-tabs__active-bar {
  background-color: #fff;
  height: 0;
}
/deep/.el-tabs__nav-wrap::after {
  background-color: #fff;
  height: 0;
}
.labelInfo {
  color: #fff;
  width: 94px;
  height: 100%;
  text-align: center;
  align-items: center;
  font-size: 12px;
  // background-color: sandybrown;
  span:hover {
    height: 30px;
    background-color: #9b0909;
    border-radius: 20px;
    padding: 0 13px;
  }
}
.tabInfo {
  height: 30px;
  background-color: #9b0909;
  border-radius: 20px;
  padding: 0 13px;
}
.nav {
  height: 35px;
  position: relative;
  top: 0;
  background-color: #c20c0c;
  box-sizing: border-box;
}
/deep/.el-tabs__item {
  height: 35px;
  padding: 0;
  line-height: 35px;
}
/deep/.el-tabs__header {
  margin: 0;
}
.navBox {
  width: 1400px;
  margin: 0 auto;
  display: flex;
  height: 35px;
  box-sizing: border-box;
  // padding-left: 157px;
}
</style>
