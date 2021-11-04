<template>
<div class="qf-cate-select">
  <el-select style="width:100%;" clearable v-model='cate'>
    <el-option value=''>全部</el-option>
    <el-option
      v-for="item in cateArr"
      :key="item.id"
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
      cateArr: [
        { id: 1, cate:'drink1', cate_zh: '酒水饮料1' },
        { id: 2, cate:'drink2', cate_zh: '酒水饮料2' },
        { id: 3, cate:'drink3', cate_zh: '酒水饮料3' },
        { id: 4, cate:'drink4', cate_zh: '酒水饮料4' }
      ],
      cate: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-cate-select {
  display: inline-block;
}
</style>
