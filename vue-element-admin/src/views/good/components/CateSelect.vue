<template>
<div class="qf-cate-select">
  <el-select style="width:100%;" clearable v-model='cate'>
    <el-option value=''>全部</el-option>
    <el-option
      v-for="item in cateArr"
      :key="item._id"
      :label="item.cate_zh"
      :value="item.cate">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  data() {
    return {
      cateArr: [],
      cate: ''
    }
  },
  async mounted() {
    const res = await this.$api.fetchAllCate()
    this.cateArr = res.list
  }
}
</script>

<style lang="scss" scoped>
.qf-cate-select {
  display: inline-block;
}
</style>
