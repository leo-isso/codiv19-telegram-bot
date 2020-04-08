import { NewsSchema, ArticleSchema } from '../../Schemas'

class NewsService {
  payload: NewsSchema

  constructor (payload: NewsSchema) {
    this.payload = payload
  }

  getTopFive (): ArticleSchema[] {
    return this.payload.articles.slice(0, 5)
  }
}

export default NewsService
