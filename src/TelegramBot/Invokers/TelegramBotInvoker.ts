import { TelegramBotReceiver } from '../Receivers'
import {
  SendHourlyMessageToChannelCommand,
  SendTopFiveMessageToChannelCommand
} from '../Commands'

class TelegramBotInvoker {
  telegramBotReceiver: TelegramBotReceiver

  constructor (telegramBotReceiver: TelegramBotReceiver) {
    this.telegramBotReceiver = telegramBotReceiver
  }

  hourlyCommand ():void{
    new SendHourlyMessageToChannelCommand(this.telegramBotReceiver).execute()
  }

  fourHourCommand ():void{
    new SendTopFiveMessageToChannelCommand(this.telegramBotReceiver).execute()
  }
}

export default TelegramBotInvoker
