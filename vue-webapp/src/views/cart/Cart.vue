<template>
<div class="qf-cart">
  <QfNavBar />

  <!-- 购物车列表 -->
  <van-swipe-cell v-for='i in 10' :key='i'>
    <van-row align='center' type='flex'>
      <van-col span="3">
        <van-checkbox class="qf-check" v-model="checked" />
      </van-col>
      <van-col span="21">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="//img11.360buyimg.com/focus/s140x140_jfs/t1/22775/21/6554/22514/5c53ec41E40d85051/cfa5a0591c452182.jpg"
        />
      </van-col>
    </van-row>
    <template #right>
      <van-button square text="删除" type="danger" style="height:100%;" />
    </template>
  </van-swipe-cell>

  <!-- 底部提交 S -->
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="full">全选</van-checkbox>
    <template #tip>
      <span>你的收货地址不支持同城送，修改地址</span>
    </template>
  </van-submit-bar>
  <!-- 底部提交 E -->
</div>
</template>

<script>
import { QfNavBar } from '@/components'
export default {
  components: {
    QfNavBar
  },
  data() {
    return {
      full: false,
      checked: false
    }
  },
  methods: {
    onSubmit() {
      console.log('提交')
    }
  }
}
</script>
<style lang="scss" scoped>
.qf-cart {
  padding-bottom: 2.4rem;
}
.van-card {
  background-color: white;
  padding-left: 0;
}
.van-swipe-cell {
  border-bottom: 1px solid #eee;
}
</style>
<style lang="scss">
.qf-check.van-checkbox {
  .van-checkbox__icon {
    margin: 0 auto;
  }
}
</style>
