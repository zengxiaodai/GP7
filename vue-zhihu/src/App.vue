<template>
  <div id="app">

    <ZhNavBar />

    <div class="container">
      <!-- 用于显示当前地址栏中url所对应的vue组件 -->
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import { ZhNavBar } from '@/components'
export default {
  components: {
    ZhNavBar
  }
}
</script>

<style>
html,body { padding: 0; margin: 0; background: #eee; }
.container { width: 1000px; margin: 5px auto; }
</style>
