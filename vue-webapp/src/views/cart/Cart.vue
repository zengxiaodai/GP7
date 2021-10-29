<template>
<div class="qf-cart">
  <QfNavBar />

  <!-- 购物车列表 -->
  <van-swipe-cell v-for='(row) in list' :key='row.id'>
    <van-row align='center' type='flex'>
      <van-col span="3">
        <van-checkbox class="qf-check" v-model="row.checked" @click='rowClick' />
      </van-col>
      <van-col span="21">
        <van-card
          :num="row.num"
          :price="row.price"
          desc="描述信息"
          :title="row.name"
          class="goods-card"
          :thumb="row.src"
        >
          <template #footer>
            <div class="btns">
              <van-button size="mini">-</van-button>
              <van-button size="mini">+</van-button>
            </div>
          </template>
        </van-card>
      </van-col>
    </van-row>
    <template #right>
      <van-button square text="删除" type="danger" style="height:100%;" />
    </template>
  </van-swipe-cell>

  <!-- 底部提交 S -->
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="full" @click='fullClick'>全选</van-checkbox>
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
      checked: false,
      list: [
        { id: 1, name: '手机', price: 56, num: 2, src: '//img11.360buyimg.com/focus/s140x140_jfs/t1/22775/21/6554/22514/5c53ec41E40d85051/cfa5a0591c452182.jpg' },
        { id: 2, name: '电脑', price: 78, num: 1, src: '//img11.360buyimg.com/focus/s140x140_jfs/t1/8436/38/14154/24093/5c53ef58Ed79ebb22/97d8f54725ec18a8.jpg' },
        { id: 3, name: '手机', price: 98, num: 2, src: '//img10.360buyimg.com/focus/s140x140_jfs/t1/17730/30/6538/19103/5c53e270Eedd82df6/ba6d1b85e5e93e98.jpg' }
      ]
    }
  },
  // computed: {
  //   full: {
  //     get() {
  //       const arr = this.list.filter(ele=>ele.checked)
  //       return arr.length === this.list.length
  //     },
  //     set(newVal) {
  //       console.log('newVal', newVal)
  //       // this.list.map((ele,idx)=>{
  //       //   this.list[idx]['checked'] = newVal
  //       // })
  //       const newList = JSON.parse(JSON.stringify(this.list))
  //       newList.map((ele,idx)=>{
  //         newList[idx].checked = newVal
  //       })
  //       this.list = newList
  //     }
  //   }
  // },
  // watch: {
  //   full() {
      // this.list.map((ele,idx)=>{
      //   this.list[idx].checked = this.full
      // })
  //   }
  // },
  methods: {
    isFull() {
      const arr = this.list.filter(ele=>ele.checked)
      this.full = (arr.length == this.list.length)
    },
    rowClick () {
      this.isFull()
    },
    fullClick() {
      this.list.map((ele,idx)=>{
        this.list[idx].checked = this.full
      })
      // this.$forceUpdate()
      this.list = JSON.parse(JSON.stringify(this.list))
    },
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
.btns {
  .van-button {
    padding: 0 .27rem;
    margin-left: .27rem;
  }
}
</style>
<style lang="scss">
.qf-check.van-checkbox {
  .van-checkbox__icon {
    margin: 0 auto;
  }
}
</style>
