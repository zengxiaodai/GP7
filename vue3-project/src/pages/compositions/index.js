import {
  isRef,
  getCurrentInstance,
  ref, unref, toRef, toRefs, reactive, shallowRef, triggerRef, provide
} from 'vue'

function useApp(key) {
  return getCurrentInstance().appContext.config.globalProperties[key]
}

function useDom() {
  let box = ref(null)
  const changeColor = () => {
    // console.log('this', this)
    // 疑问: setup如何访问到 ref属性(类似vue2中的this.$refs)
    // document.getElementById('box').style.color = 'red'
    console.log('box ref', box)
    box.value.style.color = 'green'
  }
  return [box, changeColor]
}

function useToggle() {
  let a = ref(false)
  const change = () => a.value=!a.value
  return [a, change]
}

function useDD() {
  let d = { d1: 1, d2: 2 }
  let d2 = toRef(reactive(d), 'd2')
  let dd = toRefs(reactive(d))
  console.log('----d', d)
  console.log('----d2', d2)
  console.log('----dd', dd)
  const test = () => {
    d2.value++
    console.log('---', dd)
  }
  return [d2, test]
}

export {
  useApp,
  useDom,
  useToggle,
  useDD
}
