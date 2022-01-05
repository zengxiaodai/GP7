<template>
  <h1>学习组合API</h1>
  商品数量:<input type="text" v-model.number='num' /><br>
  商品单价:<input type="text" v-model.number='price' /><br>
  总价: <input type="text" v-model.number='total' />
  <hr>

  <h1 v-text='count'></h1>
  <button @click='stopAll'>关闭所有watchEffect</button>

</template>

<script>
import { computed, ref, watchEffect, watchPostEffect, watchSyncEffect, watch, onMounted, onBeforeUpdate, onRenderTracked } from 'vue'
export default {
  setup(props, ctx) {
    let num = ref(0)
    let price = ref(0)
    // const total = computed(()=>num.value*price.value)
    const total = computed({
      get() {
        return num.value*price.value
      },
      set(val) {
        num.value = val / price.value
      }
    })

    let count = ref(0)

    const stop1 = watchPostEffect(()=>{
      // console.log('---effect post', num.value)
    })
    const stop2 = watchSyncEffect(()=>{
      // console.log('---effect sync', price.value)
    })
    const stop3 = watchEffect(()=>{
      // console.log('---effect timer', count.value)
      setTimeout(()=>{
        count.value++
      }, 1000)
    })
    const stopAll = () => {
      stop1()
      stop2()
      stop3()
      stop4()
    }

    // const stop4 = watch(total, (newT, oldT)=>console.log('total', newT, oldT))
    // const stop4 = watch([num,price], ([newN,newP],[oldN,oldP])=>{
    //   console.log('new', newN, newP)
    //   console.log('old', oldN, oldP)
    // })
    const stop4 = watch(
      ()=>num.value,
      (newN,oldN)=>{
        console.log('watch num', newN, oldN)
      }
    )

    onMounted(()=>document.title='GP7')
    onBeforeUpdate(()=>console.log('diff will start'))

    return {
      num,
      price,
      total,
      count,
      stopAll
    }
  },
  // computed: {
  //   total() {
  //     return this.num * this.price
  //   }
  // },
}
</script>

<style lang="css" scoped>
</style>
