<template>
<div class="qf-find">

  <!-- 顶部导航 -->
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
  />

  <div class="wrap">
    <div class="left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for='i in 30' :key='i' title="礼品鲜花" />
      </van-sidebar>
    </div>
    <div class="right">
      <van-grid :column-num='3' :border='false'>
        <van-grid-item v-for='i in 28' :key='i'>
          <template>
            <div class="good">
              <img src="//img20.360buyimg.com/focus/s140x140_jfs/t18280/1/2656168555/9439/7cab050f/5b029068N322d822c.jpg" alt=""/>
              <div>狗狗活体</div>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>



  <QfTabBar />
</div>

</template>

<script>
import { QfTabBar } from '@/components'
export default {
  name: 'Find',
  components: {
    QfTabBar
  },
  data() {
    return {
      activeKey: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-find {
  .wrap {
    position: absolute;
    bottom: 1.33rem;
    right: 0;
    left: 0;
    top: 1.07rem;
    background-color: #ccc;
    .left {
      position: absolute;
      bottom: 0;
      left: 0;
      top: 0;
      width: 2.27rem;
      overflow-y: scroll;
      // css 去除滚动条
    }
    .right {
      position: absolute;
      bottom: 0;
      left: 2.27rem;
      top: 0;
      right: 0;
      background-color: white;
      overflow-y: scroll;
      padding: .27rem;
      // css 去除滚动条
      .good {
        font-size: .32rem;
        text-align: center;
        img {
          display: inline-block;
          width: 1.87rem;
          height: 1.87rem;
        }
      }
    }
  }
}

.van-sidebar {
  width: 100%;
  .van-sidebar-item {
    height: 1.23rem;
    line-height: .24rem;
    border: none;
    .van-sidebar-item__text {
      // height: 1.23rem;
      // line-height: 1.23rem;
    }

  }
  .van-sidebar-item--select::before {
    display: none;
  }
  .van-sidebar-item--select {
    color: #e93b3d;
  }
}
</style>
