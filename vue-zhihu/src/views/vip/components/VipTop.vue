<template>
<div class="qf-vip-top">
  <h3>vip top</h3>
  <h3 v-text='count'></h3>
</div>
</template>

<script>
export default {
  name: 'VipTop',
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  mounted() {
    // 原则1：不建议$store.state.count这么使用store
    console.log('$store', this.$store)
  }
}
</script>

<style lang="scss" scoped>
</style>
