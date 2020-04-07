import ArticleSchema from './ArticleSchema'

export default interface NewsSchema {
  status: string
  totalResults: number
  articles: ArticleSchema[]
}
