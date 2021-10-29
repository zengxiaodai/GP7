<template>

<div class="qf-good-list">
  <!-- 商品列表 -->
  <div class="row" v-for='i in n' :key='i'>
    <div class="row-wrap">
      <div v-for='i in 2' :key='i'>
        <div>
          <img src="//img20.360buyimg.com/mobilecms/s372x372_jfs/t1/140860/3/2760/413429/5f0b0012Eadd474b2/5ee5794705133196.jpg!q70.dpg.webp" alt=""/>
          <div>
            <span>ll</span>
            <span>泉阳泉 长白山天然矿泉水 2L*6 整箱装</span>
          </div>
          <div>
            <span>￥36</span>
            <span>闪购</span>
            <span>看相似</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</template>

<script>
export default {
  props: {
    n: { type: Number, default: 0 }
  }
}
</script>

<style lang="scss" scoped>
.qf-good-list {
  .row {
    box-sizing: border-box;
    padding: 0 .13rem;
    margin-top: .13rem;
    .row-wrap {
      width: 100%;
      display: flex;
      &>div {
        flex: 1;
        text-align: center;
        &>div {
          width: 4.61rem;
          height: 6.93rem;
          background-color: orange;
          display: inline-block;
          img {
            display: block;
            width: 4.61rem;
            height: 4.61rem;
          }
        }
      }
    }
  }
}
</style>
