<template>
<div class="qf-home-hot">
  <div class='cates'>
    <span
      v-for='c in cates'
      :key='c.id'
      v-text='c.cate_zh'
      @click='cateClick(c)'
      :class='{"on": cate===c.cate}'
    />
  </div>

  <div>
    <h2>
      <span v-text='list'></span>
      列表
    </h2>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cates: [
        { id: 1, cate: '', cate_zh: '全站' },
        { id: 2, cate: 'science', cate_zh: '科学' },
        { id: 3, cate: 'digital', cate_zh: '数码' }
      ],
      list: ''
    }
  },
  computed: {
    cate() {
      return this.$route.query.list
    }
  },
  watch: {
    cate() {
      this.list = (this.cates.find(e=>e.cate===this.cate)).cate_zh
    }
  },
  methods: {
    cateClick(c) {
      console.log('c', c)
      // this.list = c
      this.$router.push(`${this.$route.path}?list=${c.cate}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.cates {
  span.on {
    color: red;
  }
}
</style>
