<template>
<div class="qf-home" style='font-size:20px;'>
  <h1 class='test'>千锋欢迎你</h1>
  <div class="avatar">
    头像
  </div>

  <QfTabBar />
</div>
</template>

<script>
import { QfTabBar } from '@/components'
export default {
  components: {
    QfTabBar
  }
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 2rem;
}
.avatar {
  width: 6.57rem;
  height: 2rem;
  background: red;
}
</style>
