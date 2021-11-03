<template>
<div>
  <keep-alive>
    <router-view name='alive'></router-view>
  </keep-alive>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
