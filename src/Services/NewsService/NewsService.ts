import { NewsSchema, ArticleSchema } from '../../Schemas'

class NewsService {
  payload: NewsSchema

  constructor (payload: NewsSchema) {
    this.payload = payload
  }

  getTopNews (howMany = 5): ArticleSchema[] {
    return this.payload.articles.slice(0, howMany)
  }
}

export default NewsService
