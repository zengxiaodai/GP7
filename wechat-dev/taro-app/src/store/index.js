import Count from './modules/count'

class Store {
  constructor() {
    this.count = new Count()
  }
}
export default new Store()
