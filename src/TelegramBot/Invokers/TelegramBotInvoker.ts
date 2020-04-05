import { TelegramBotReceiver } from '../Receivers'
import { SendHourlyMessageToChannelCommand } from '../Commands'

class TelegramBotInvoker {
  telegramBotReceiver: TelegramBotReceiver

  constructor (telegramBotReceiver: TelegramBotReceiver) {
    this.telegramBotReceiver = telegramBotReceiver
  }

  hourlyCommand ():void{
    new SendHourlyMessageToChannelCommand(this.telegramBotReceiver).execute()
  }
}

export default TelegramBotInvoker
