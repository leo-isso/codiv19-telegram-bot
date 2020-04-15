import { expect } from 'chai'
import 'mocha'

import newsMock from '../mock/news.mock'

import TelegramButtonsService from '../../Services/TelegramButtonsService/TelegramButtonsService'

describe('Testing TelegramButtonsService methods', () => {
  const topFiveArticles = newsMock.articles.slice(0, 5)

  it('TelegramButtonsService should return top 5 views', () => {
    const telegramButtons = TelegramButtonsService.createTelegramNewsButtons(topFiveArticles)

    const expectedButtons = [
      [{
        text: 'News: ' + 'Arizona Coyotes season sn' + '...',
        url: 'https://www.nhl.com/news/2019-20-arizona-coyotes-review/c-316167780'
      }],
      [{
        text: 'News: ' + 'Favorite memory of season' + '...',
        url: 'https://www.nhl.com/news/favorite-memory-2019-20-season-nhl-global-series/c-316597050'
      }],
      [{
        text: 'News: ' + 'Coronavirus Australia liv' + '...',
        url: 'https://www.news.com.au/world/coronavirus/australia/coronavirus-australia-live-updates/live-coverage/c48a7bca7507f7b8a17f5c261b684347'
      }],
      [{
        text: 'News: ' + 'Coronavirus latest: Trump' + '...',
        url: 'https://www.ft.com/content/59ff62ae-3f66-3ec2-b269-e94e9a72f198'
      }],
      [{
        text: 'News: ' + 'US to halt funding to WHO' + '...',
        url: 'https://www.bbc.com/news/world-us-canada-52289056?at_medium=custom7&amp;at_campaign=64&amp;at_custom2=twitter&amp;at_custom1=%5Bpost+type%5D&amp;at_custom3=%40BBCBreaking&amp;at_custom4=FF6CAAE8-7E9F-11EA-A0A9-EBD0923C408C'
      }]
    ]

    expect(telegramButtons).to.eql(expectedButtons)
  })
})
