<template>
<div class="qf-tabbar">
  <van-tabbar
    v-model="active"
    active-color='#fa2c19'
    route
  >
    <van-tabbar-item
      v-for='tab in tabArr'
      :to='tab.path'
      :key='tab.id'
      :dot='tab.dot'
    >
      <template #icon='scope'>
        <div class="tab">
          <img :src='$img[`i${tab.icon}${scope.active?"On":""}`]' />
          <div v-text='tab.text'></div>
        </div>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      tabArr: [
        { id: 1, icon: 'Home', path: '/', text: '首页', dot: false },
        { id: 2, icon: 'Find', path: '/find', text: '品类', dot: false },
        { id: 3, icon: 'Cart', path: '/cart', text: '购物车', dot: false },
        { id: 4, icon: 'User', path: '/user', text: '未登录', dot: false }
      ]
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
