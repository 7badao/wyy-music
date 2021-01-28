<template>
  <div class="comPage">
    <header>
      <div class="headerInfo">
        <div class="logo flex_center">
          <span>网抑云音乐</span>
        </div>
        <!-- tab选项开始 -->
        <ul class="tabHeader">
          <li class="liTag">
            <a href>发现音乐</a>
          </li>
          <li>
            <a href>我的音乐</a>
          </li>
          <li>
            <a href>朋友</a>
          </li>
          <li>
            <a href>商城</a>
          </li>
          <li>
            <a href>音乐人</a>
          </li>
          <li>
            <a href>下载客户端</a>
          </li>
        </ul>
        <!-- tab选项结束 -->
        <!-- hot开始 -->
        <div class="hot">
          <div class="hotBox">
            <span>HOT</span>
          </div>
        </div>
        <!-- hot结束 -->
        <!-- 搜索开始 -->
        <div class="searchHeader">
          <div class="search">
            <i class="searchIcon el-icon-search"></i>
            <input class="searchInput" type="text" placeholder="音乐/视频/电台/用户" />
          </div>
        </div>
        <!-- 搜索结束 -->
        <!-- 右边布局开始 -->
        <div class="rightBox">
          <div class="creationC">
            <a href>创作者中心</a>
          </div>
          <div class="loginBtnRight">
            <span>登录</span>
          </div>
        </div>
        <!-- 右边布局结束 -->
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
header {
  height: 70px;
  background-color: #242424;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  position: relative;
  display: flex;
  align-items: center;
  top: 0;
  a {
    color: #ccc;
  }
  .headerInfo {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    height: 70px;
    box-sizing: border-box;
    position: relative;
    .tabHeader {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      li {
        width: 94px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        a {
          font-size: 14px;
          // color: #ccc;
        }
      }
    }
    .hot {
      width: 30px;
      height: 18px;
      position: relative;
      top: 0;
      float: left;
      cursor: pointer;
      .hotBox {
        position: absolute;
        top: 21px;
        width: 30px;
        height: 18px;
        background-color: #c20c0c;
        border-radius: 6px;
        font-size: 10px;
        line-height: 18px;
        text-align: center;
        color: #fff;
      }
    }
    .searchHeader {
      float: left;
      display: flex;
      align-items: center;
      position: absolute;
      right: 160px;
      height: 100%;
      margin-left: 50px;
      margin-right: 10px;
      .search {
        position: relative;
        top: 0;
        width: 158px;
        height: 32px;
        border-radius: 32px;
        background-color: #fff;
        box-sizing: border-box;
        .searchIcon {
          position: absolute;
          color: #ccc;
          top: 8px;
          left: 7px;
        }
        .searchInput {
          width: 100%;
          height: 100%;
          text-align: center;
          color: #000;
          font-size: 12px;
        }
      }
    }
    .rightBox {
      position: absolute;
      right: 10px;
      display: flex;
      align-items: center;
      height: 100%;
      color: #fff;
      .creationC {
        width: 90px;
        height: 32px;
        border-radius: 20px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        font-size: 12px;
        text-align: center;
        line-height: 32px;
        margin-right: 10px;
        a {
          color: #fff;
        }
      }
      .loginBtnRight {
        display: flex;
        cursor: pointer;
        font-size: 14px;
        margin-left: 10px;
        color: #fff;
      }
    }
  }
  .liTag {
    background-color: #000;
    color: #fff;
  }
  .logo {
    float: left;
    font-weight: bold;
    font-size: 20px;
    width: 157px;
    cursor: pointer;
    span {
      color: #fff;
    }
  }
}
</style>
