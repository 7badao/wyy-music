<template>
  <div class="containerLayout">
    <layout-header></layout-header>
    <div class="layoutMain">
      <router-view></router-view>
      <el-backtop :bottom="100" :right="300">
        <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >
          <i class="el-icon-s-promotion"></i>
        </div>
      </el-backtop>
    </div>
  </div>
</template>

<script>
import layoutHeader from './components/layout-Header'
export default {
  components: {
    layoutHeader
  }
}
</script>

<style lang="less" scoped>
.containerLayout {
  display: flex;
  flex-direction: column;
}
.layoutMain {
  min-width: 1200px;
}
</style>
