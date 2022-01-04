<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <Home /> -->
  <!-- <Todo1 /> -->
  <Todo2 />
</template>

<script setup>
  import Home from '@/pages/Home.vue'
  import Todo1 from '@/pages/Todo1.vue'
  import Todo2 from '@/pages/Todo2'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  display: inline-block;
  padding: 0 20px;
}
</style>
