<template>
  <div class="fount-main">
    <div class="main-center">
      <!-- 左边布局 -->
      <div class="fountMain-left">
        <div class="fountMain-warp">
          <!--头部 -->
          <div class="fountMain-header">
            <!-- 同心圆开始 -->
            <div id="circle_bot">
              <div id="circle_mid"></div>
            </div>
            <!-- 同心圆结束 -->
            <div class="hotRecommend">热门推荐</div>
            <!-- tab开始 -->
            <ul class="hotTab">
              <li>
                <a href>华语</a>
              </li>
              <li>
                <a href>流行</a>
              </li>
              <li>
                <a href>摇滚</a>
              </li>
              <li>
                <a href>民谣</a>
              </li>
              <li>
                <a href>电子</a>
              </li>
            </ul>
            <!-- tab结束 -->
            <!-- 更多 -->
            <div class="hot-more">
              <span>更多</span>
              <i class="el-icon-right"></i>
            </div>
          </div>
          <!-- 主体部分开始 -->
          <div class="fountHot-main">
            <ul class="foutMain-Ul">
              <li v-for="i in personalLizedArr" :key="i.id">
                <img :src="i.picUrl" alt />
                <div class="liInfo">
                  <span>{{i.name}}</span>
                </div>
              </li>
            </ul>
            <!--  新碟上架-->
            <div class="fountMain-header">
              <!-- 同心圆开始 -->
              <div id="circle_bot">
                <div id="circle_mid"></div>
              </div>
              <!-- 同心圆结束 -->
              <div class="hotRecommend">新碟上架</div>
              <!-- 更多 -->
              <div class="hot-more">
                <span>更多</span>
                <i class="el-icon-right"></i>
              </div>
            </div>
            <ul class="foutMain-Ul">
              <li v-for="i in AlbumList" :key="i.albumId">
                <img :src="i.coverUrl" alt />
                <div class="liInfo">
                  <span>{{i.artistName}}</span>
                </div>
              </li>
            </ul>
            <!-- 新碟上架结束 -->
            <!--  榜单-->
            <div class="fountMain-header">
              <!-- 同心圆开始 -->
              <div id="circle_bot">
                <div id="circle_mid"></div>
              </div>
              <!-- 同心圆结束 -->
              <div class="hotRecommend">榜单</div>
              <!-- 更多 -->
              <div class="hot-more">
                <span>更多</span>
                <i class="el-icon-right"></i>
              </div>
            </div>
            <ul class="foutMain-Ul">
              <li v-for="i in ToplistArr" :key="i.id">
                <img :src="i.coverImgUrl" alt />
                <div class="liInfo">
                  <span>{{i.description}}</span>
                </div>
              </li>
            </ul>
            <!-- 榜单结束 -->
          </div>
          <!-- 主题部分结束 -->
        </div>
      </div>
      <!-- 左边布局结束 -->
      <!-- 右边布局开始 -->
      <div class="fountMain-right">
        <!-- 右侧去登陆 -->
        <fount-right></fount-right>
      </div>
      <!-- 右边布局结束 -->
    </div>
    <my-footer></my-footer>
    <!-- 播放器 -->
    <play-bar></play-bar>
  </div>
</template>

<script>
import myFooter from '@/components/Footer'
import PlayBar from '@/components/PlayBar'
import FountRight from '../../../components/commont/FountRight'
export default {
  props: ['personalLizedArr'],
  components: {
    myFooter,
    PlayBar,
    FountRight
  },
  data () {
    return {
      // 推荐歌单
      AlbumList: null,
      // 榜单
      ToplistArr: null
    }
  },
  methods: {
    async getAlbumList () {
      const res = await this.$http.get('/album/list')
      this.AlbumList = res.data.products
    },
    async getToplist () {
      const res = await this.$http.get('/toplist')
      this.ToplistArr = res.data.list
    }
  },
  created () {
    this.getAlbumList()
    this.getToplist()
  }
}
</script>

<style lang="less" scoped>
.fount-main {
  width: 100%;
  box-sizing: border-box;
  .main-center {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    .fountMain-left {
      flex: 1;
      box-sizing: border-box;
      border-left: 1px solid #000;
      .fountMain-warp {
        padding: 20px 20px 40px;
        background-color: #fff;
        .fountMain-header {
          height: 35px;
          position: relative;
          border-bottom: 2px solid #c10d0c;
          display: flex;
          align-items: center;
          #circle_bot {
            background-color: #e09;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-color: #c10d0c;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
          }
          #circle_mid {
            background-color: #fff;
            width: 11px;
            height: 11px;
            border-radius: 100%;
          }
          .hotTab {
            display: flex;
            width: 240px;
            justify-content: space-between;
            font-size: 13px;
            li {
              flex: 1;
              border-right: 1px solid #ccc;
              text-align: center;
              cursor: pointer;
              a {
                color: #000;
              }
            }
          }
          .hotRecommend {
            font-size: 20px;
            margin-right: 20px;
          }
          .hot-more {
            position: absolute;
            right: 0;
            font-size: 14px;
            .el-icon-right {
              color: #c10d0c;
              font-weight: bold;
              margin-left: 5px;
            }
          }
        }
        .fountHot-main {
          box-sizing: border-box;
          .foutMain-Ul {
            display: flex;
            flex-wrap: wrap;
            li {
              width: 25%;
              height: 204px;
              display: flex;
              align-items: center;
              background-color: #fff;
              justify-content: center;
              flex-direction: column;
              img {
                width: 140px;
                height: 140px;
                background-color: skyblue;
                // margin: 0 auto;
                margin-bottom: 8px;
              }
              .liInfo {
                font-size: 13px;
                width: 140px;
                height: 40px;
                display: flex;
                margin: 0 auto;
                span {
                  text-align: start;
                }
              }
            }
          }
        }
      }
    }
    .fountMain-right {
      box-sizing: border-box;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      width: 250px;
      background-color: #fff;
    }
  }
}
</style>
