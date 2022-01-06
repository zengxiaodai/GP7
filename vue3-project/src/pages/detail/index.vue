<template>
  <h1>在这里测试vue3的若干细节</h1>
  <div v-for='item in list' :ref='pushRef'>
    <span v-text='item.name'></span>
  </div>
  <AsyncChild />
</template>

<script setup>
import { reactive, onMounted, defineAsyncComponent } from 'vue'
const AsyncChild = defineAsyncComponent(()=>import('./components/AsyncChild.vue'))

let list = reactive([
  { id: 1, name: '张三', age: 10 },
  { id: 2, name: '李四', age: 10 },
  { id: 3, name: '王王', age: 10 }
])

let refArr = []
const pushRef = el => {
  if (el) {
    refArr.push(el)
  }
}
onMounted(()=>{
  console.log('refArr', refArr)
  refArr[1].style.color = 'red'
})

</script>

<style lang="css" scoped>
</style>
