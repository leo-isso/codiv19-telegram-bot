import './utils/env'

import { SendHourlyMessageToChannelCommand } from './TelegramBot/Commands'
import { TelegramBotReceiver } from './TelegramBot/Receivers'

const executeCommand = () :void => {
  const command = new SendHourlyMessageToChannelCommand(new TelegramBotReceiver())
  command.execute()
}

executeCommand()
