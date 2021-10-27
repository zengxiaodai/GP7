<template>
<div class="qf-vip-bot">
  <h3>vip bot</h3>
  <h3 v-text='count'></h3>
  <button @click='change("add")'>自增</button>
  <button @click='change("sub")'>自减</button>
</div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    change(type) {
      // 1、【不建议】直接修改store中数据
      // this.$store.state.count++
      // 2、【建议】使用$store.commit()提交并触发一个mutations方法去修改store数据
      this.$store.commit('changeCount', {type, step: 2})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
