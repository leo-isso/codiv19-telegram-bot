import { expect } from 'chai'
import 'mocha'

import newsMock from '../mock/news.mock'

import NewsService from '../../Services/NewsService/NewsService'

describe('Testing NewsService methods', () => {
  const newsService = new NewsService(newsMock)

  it('NewsService should return top 5 views', () => {
    const topFiveNewsExpected = newsMock.articles.slice(0, 5)

    const topFiveNews = newsService.getTopNews(5)

    expect(topFiveNews).to.eql(topFiveNewsExpected)
  })
})
