<template>
<div class="zh-navbar">
  <div class="wrap">
    <span>知乎</span>
    <span>
      <router-link
        v-for='nav in routes'
        v-text='nav.text'
        :to='nav.path'
        :key='nav.id'
      ></router-link>
    </span>
    <span>
      <input type="text" />
    </span>
    <span>提问</span>
  </div>
</div>
</template>

<script>
import { routes } from '@/router'
export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
.zh-navbar {
  line-height: 50px;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  &>.wrap {
    width: 1000px;
    margin: 0 auto;
  }
}
</style>
