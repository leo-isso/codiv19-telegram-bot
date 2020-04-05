import './utils/env'

import { TelegramBotReceiver } from './TelegramBot/Receivers'
import TelegramBotInvoker from './TelegramBot/Invokers/TelegramBotInvoker'

try {
  const command = process.argv[2]
  const receiver = new TelegramBotReceiver(process.env.TELEGRAM_BOT_TOKEN)
  const invoker = new TelegramBotInvoker(receiver)

  switch (command) {
    case '--hourly':
      invoker.hourlyCommand()
      break

    case '--fourHours':
      invoker.fourHourCommand()
      break

    default:
      console.error('Invalid command')
      break
  }
} catch (err) {
  console.error('Please use a valid command as an inline argument.')
}
