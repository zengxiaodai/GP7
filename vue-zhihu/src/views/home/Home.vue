<template>
<div class="zh-home">
  <div class="left">
    <h3>二级菜单</h3>
    <h3>各种列表</h3>
  </div>
  <div class="right">
    <h3>四个来自layout中的组件</h3>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.zh-home {
  display: flex;
  .left {
    flex: 5;
    background-color: white;
  }
  .right {
    flex: 2;
  }
}
</style>
