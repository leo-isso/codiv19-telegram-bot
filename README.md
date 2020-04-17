# COVID-19 Telegram Bot

## Inspiration

I live in São Paulo, Brazil, and due to the [coronavirus pandemic](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic) the city's citizens were asked to #stayhome and help to flatten the infection graph curve, so the authorities and medical institutions can work with a less overloaded system, consequently saving more lifes.

Fortunately, as a software developer, I can still work from home, and I'm used to home office. I wanted to invest the time I won from not having to commute to work to improve my skills, and cultivate good habits. I also wanted to, somehow, help people to easily have access to secure information of Coronavirus stats, since in Brazil fake news spreads rapidly... Then I came up with this project.

## How does it work?

The bot sends global statistics to the channel every hour, and top 5 most affected countries statistics every 4 hours. 

I didn't want to keep an node instance with a timer to send the messages, and a great friend of mine came up with the great idea of using [crontab](https://pt.wikipedia.org/wiki/Crontab).

So basically, at the times that were set to cron with this [script](./scripts/cron-scripts), it runs some commands that will, based on which parameters were given to the script:

- Get the wanted data from APIs
- Format the message
- Sent the formatted message to the Channel

To make it easier to develop in any OS, make the use of crontab, test if it's running as expected, and serve, the project is run in a [docker container](https://www.docker.com/).
