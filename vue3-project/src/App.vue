<template>
  <router-link to='/find' custom v-slot='scope'>
    <NavLink text='你好' :scope='scope' />
  </router-link>
  <router-view></router-view>
</template>

<script setup>
  import Home from '@/pages/Home.vue'
  import Todo1 from '@/pages/Todo1.vue'
  import Todo2 from '@/pages/Todo2'
  import Find from '@/pages/Find.vue'
  import About from '@/pages/About'
  import User from '@/pages/User.vue'

  import NavLink from '@/components/NavLink.vue'
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

img {
  display: block;
  margin: 20px auto;
}

.box {
  display: inline-block;
  padding: 0 20px;
}
</style>
