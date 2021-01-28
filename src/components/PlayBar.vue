<template>
  <div class="playBar" v-show="isShowTag">
    <div class="avatar">
      <img src alt />
    </div>
    <div class="info">
      <p class="ellipsis">L'Impératrice</p>
      <h2 class="ellipsis">Agitations tropicales</h2>
    </div>
    <!-- 播放控制器 -->
    <div class="player-btn">
      <i class="iconfont icon-kuaijin"></i>
      <audio src="https://music.163.com/song/media/outer/url?id=1435628296.mp3" controls="controls"></audio>
      <i class="iconfont icon-houtui"></i>
    </div>
    <!-- 播放面板-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 是否播放
      isPlayTag: false,
      volumeNum: 50,
      // 是否默认显示
      isShowTag: false
    }
  }
}
</script>

<style lang="less" scoped>
.playBar {
  width: 100%;
  height: 72px;
  background: red;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 8000;
  padding: 0 10px 0 20px;
  // justify-content: space-between;
  box-shadow: 0 5px 40px -1px rgba(2, 10, 18, 0.1);
  display: flex;
  align-items: center;
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-right: 30px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 5px;
    }
  }
  .info {
    width: 150px;
    margin-right: 15px;
    text-align: center;
    .ellipsis {
      font-size: 12px;
      color: #999;
    }
  }
  .player-btn {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      font-size: 30px;
      margin-right: 10px;
      color: #eee;
    }
    .palyTag {
      font-size: 40px;
    }
    audio {
      margin-right: 10px;
    }
  }
}
</style>
