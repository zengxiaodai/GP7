import { makeObservable, observable, action, computed, flow } from 'mobx'
import { fetchArticleList } from '@/api'

// makeObservable(this, {})
// 根据开发者的需求，把指定的成员属性变成observable变量，把成员方法变成action。

// 【mobx(v6)写法】
export default class StudyStore {
  constructor() {
    makeObservable(this, {
      msg: observable,
      num: observable,
      changeNum: action,
      num2: computed,
      list: observable,
      getList: action
    })
  }
  msg = 'GP7'
  num = 0
  list = []
  get num2 () {
    return this.num * 100
  }
  changeNum (payload) {
    this.num += payload
  }
  getList (params) {
    fetchArticleList(params).then(list=>{
      this.list = list
    })
  }
}

// 【mobx(v5)写法】
// import { observable, action, computed } from 'mobx'
// class StudyStore {
//   @observable
//   num = 0
//
//   @action
//   changeNum(payload) {
//     this.num += payload
//   }
//
//   @computed
//   get num2() {
//     return this.num * 2
//   }
// }
