import { TelegramBotReceiver } from '../Receivers'
import {
  SendHourlyMessageToChannelCommand,
  SendFourHoursMessageToChannelCommand
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
    new SendFourHoursMessageToChannelCommand(this.telegramBotReceiver).execute()
  }
}

export default TelegramBotInvoker
