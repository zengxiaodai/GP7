import { observable, action } from 'mobx'

export default class Count {
  @observable
  counter = 0

  @action
  counterStore() {
    this.counter++
  }

  @action
  increment() {
    this.counter++
  }

  @action
  decrement() {
    this.counter--
  }

  @action
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}
