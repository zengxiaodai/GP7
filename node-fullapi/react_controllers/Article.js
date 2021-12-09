const articleModel = require('../react_models/article')

class Article {
  static async addArticle(ctx) {
    const { title, author, top, image, content } = ctx.request.body
    const ele = {
      title,
      author,
      top,
      image,
      content
    }
    // 敏感词验证
    const info = await articleModel.insertMany([ele])
    ctx.body = { code: 0, msg:'success', data: {info}}
  }

  static async listArticle(ctx) {
    let { page, size, title } = ctx.request.query
    page = Number(page || 1)
    size = Number(size || 10)
    let params = {
      title: new RegExp(title, 'img')
    }
    if (!title) delete params.title
    const total = await articleModel.find(params).count()
    const list = await articleModel.find(params).skip((page-1)*size).limit(size).sort({_id:-1})
    ctx.body = {code:0,msg:'success',data:{list,total}}
  }
}

module.exports = Article
