import { TelegramBotReceiver } from '../Receivers'
import {
  SendStatisticsWithNewsCommand,
  SendTopFiveMessageToChannelCommand
} from '../Commands'

class TelegramBotInvoker {
  telegramBotReceiver: TelegramBotReceiver

  constructor (telegramBotReceiver: TelegramBotReceiver) {
    this.telegramBotReceiver = telegramBotReceiver
  }

  hourlyCommand ():void{
    new SendStatisticsWithNewsCommand(this.telegramBotReceiver).execute()
  }

  fourHourCommand ():void{
    new SendTopFiveMessageToChannelCommand(this.telegramBotReceiver).execute()
  }
}

export default TelegramBotInvoker
