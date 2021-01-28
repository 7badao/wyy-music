<template>
  <div class="comPage">
    <footer>
      <div class="container">
        <p class="title">| 网抑云音乐</p>
        <p class="desc">网抑云音乐</p>
        <div class="social flex-row">
          <a href>
            <span class="flex-center">
              <i class="iconfont"></i>
            </span>
          </a>
          <a href>
            <span class="flex-center">
              <i class="iconfont"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <p>
            <span class="mr5">Copyright © 2012-2021</span>
            <a href="#">网抑云 演示站</a>
            <span>. Designed by</span>
            <a href="#" target="_blank">冠希科技</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  height: 148px;
  background-color: #161e27;
  // display: flex;
  padding: 20px 50px;
  box-sizing: border-box;
  color: #fff;
  .title {
    margin-bottom: 20px;
  }
  .desc {
    margin-bottom: 10px;
  }
  a {
    color: #fff;
  }
  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
