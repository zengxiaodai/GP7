<template>
<div class="qf-tabbar">
  <van-tabbar
    v-model="active"
    active-color='#fa2c19'
    route
  >
    <van-tabbar-item to='/'>
      <template #icon='scope'>
        <div class="tab">
          <img :src='scope.active?$img.iHomeOn:$img.iHome' />
          <div>首页</div>
        </div>
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="search" to='/find'>品类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" badge="20" dot>未登录</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-tabbar {
  .tab {
    font-size: .32rem;
    text-align: center;
    img {
      display: inline-block;
      border-radius: 50%;
    }
  }
}
</style>
