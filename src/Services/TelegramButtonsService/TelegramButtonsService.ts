import { InlineKeyboardButton } from 'node-telegram-bot-api'

import { ArticleSchema } from '../../Schemas'

class TelegramButtonsService {
  static createTelegramNewsButtons (articles: ArticleSchema[]):InlineKeyboardButton[][] {
    return articles.map(article => [{
      text: 'News: ' + article.title.split('').slice(0, 25).join('') + '...',
      url: article.url
    }]
    )
  }
}

export default TelegramButtonsService
