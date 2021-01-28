<template>
  <div class="FountRight">
    <div class="rightLogin">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div class="rightBtnLogin">用户登录</div>
    </div>
    <!-- 入驻歌手开始 -->
    <div class="inSinger">
      <div class="singerHeader">
        <p>入住歌手</p>
        <p class="toViewAll">查看全部>></p>
      </div>
      <div class="singerMain">
        <ul class="singeMainUl">
          <li v-for="i in hotArtistsHot" :key="i.id">
            <img :src="i.img1v1Url" alt />
            <p class="liInfo">
              <span class="singeName">{{i.name}}</span>
              <span class="singeIntor">音乐人</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="applyToSingerBtn">
        <p>申请成为网易音乐人</p>
      </div>
    </div>
    <!-- 入驻歌手结束 -->
    <!-- 热门主播的开始 -->
    <div class="theHost">
      <div class="singerHeader">
        <p>热门主播</p>
      </div>
      <div class="singerMain">
        <ul class="singeMainUl">
          <li v-for="i in topList" :key="i.rank">
            <img :src="i.avatarUrl" alt />
            <p class="liInfo">
              <span class="singeName">{{i.nickName}}</span>
              <span class="singeIntor">热门主播</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 热门主播的结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 热门主播
      topList: null,
      // 热门歌手
      hotArtistsHot: null
    }
  },
  methods: {
    async getPopularHot () {
      const { data: res } = await this.$http.get('/dj/toplist/hours?limit=6')
      this.topList = res.data.list
    },
    async getArtistsHot () {
      const { data: res } = await this.$http.get('/top/artists?offset=0&limit=6')
      console.log(res, '主播')
      this.hotArtistsHot = res.artists
    }
  },
  created () {
    this.getPopularHot()
    this.getArtistsHot()
  }
}
</script>

<style lang="less" scopd>
.FountRight {
  .rightLogin {
    height: 126px;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    p {
      width: 205px;
      font-size: 13px;
      margin-bottom: 10px;
    }
    .rightBtnLogin {
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      box-shadow: 0 1px 0 #8a060b;
      background-color: #e22229;
      cursor: pointer;
      font-size: 13px;
      border-radius: 5px;
    }
  }
  .inSinger {
    margin-top: 15px;
    .singerHeader {
      height: 30px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      font-size: 14px;
      align-items: center;
      color: #333;
      p:first-child {
        font-weight: bold;
      }
      .toViewAll {
        cursor: pointer;
        color: #666;
      }
    }
    .singerMain {
      margin: 6px 0 14px 20px;
      li {
        width: 210px;
        display: flex;
        border: 1px solid #e9e9e9;
        margin-bottom: 10px;
        align-items: center;
        height: 62px;
        img {
          width: 62px;
          height: 62px;
        }
        .liInfo {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0 0 0 10px;
          height: 100%;
          justify-content: center;
          background-color: #f4f4f4;
          box-sizing: border-box;
          .singeName {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .singeIntor {
            font-size: 13px;
          }
        }
      }
    }
    .applyToSingerBtn {
      margin: 0 20px;
      height: 31px;
      border-radius: 4px;
      text-align: center;
      line-height: 31px;
      background-color: #f1f1f1;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .theHost {
    margin-top: 15px;
    .singerHeader {
      height: 50px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      font-size: 14px;
      align-items: center;
      color: #333;
      p:first-child {
        font-weight: bold;
      }
    }
    .singerMain {
      margin: 6px 0 14px 20px;
      li {
        width: 210px;
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        height: 62px;
        img {
          width: 62px;
          height: 62px;
        }
        .liInfo {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0 0 0 10px;
          height: 100%;
          justify-content: center;
          box-sizing: border-box;
          .singeName {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .singeIntor {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
