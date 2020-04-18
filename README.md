# COVID-19 Telegram Bot

Follow the bot's [telegram channel](https://t.me/covid19hourly)

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

## Contributing

If you want to help this project by contributing, please do it, you are super welcome!

All you have to do is:

- Fork the project
- Checkout for a new branch
- Code
- Test
- Create a pull request

### Running the project

To run this project, you will need to get the keys to make request to the APIs.

You can get the COVID-19's key [here](https://rapidapi.com/api-sports/api/covid-193/)

And set these variables:

```
RAPID_API_HOST=covid-193.p.rapidapi.com
RAPID_API_KEY=<the_key>
RAPID_API_URL=https://covid-193.p.rapidapi.com
```

Also, you'll need the news api key, that you can get [here](https://newsapi.org/)

Set the following environment variables:

```
NEWS_API_KEY=<the_key>
NEWS_API_URL=https://newsapi.org/v2
```

The last but not least, actually one of the most important things here, you'll need a test bot!

You can find everything you need to know at [Telegram API's docs](https://core.telegram.org/api) and at [Telegram Bots API's docs](https://core.telegram.org/bots/api)! Botfather shall help ya!

Ah yes, you can also create a channel, or even pass an user ID to the `TELEGRAM_CHANNEL_ID` variable

```
TELEGRAM_BOT_TOKEN=<the_key>
TELEGRAM_CHANNEL_ID=<channel_id || user_id>
```

Ooookay, everything is set! All you got to do is to build the JS files and test it, rigth?

```sh
# Install the dependencies
yarn install

# To run build the JS files
yarn build

# Run the hourly message script
node ./dist/server.js --hourly

# Run the four hours message script
node ./dist/server.js --fourHours
```

### Tests

The tests are written using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/), they are my favorite ~flavour of~ frameworks for js testing.

I think this is the weakeast part of the project since I didn't start the project by using TDD... Well, feel free to help me with this!

I'm also looking forward to add coverage tests.

To run the tests:

```sh
# Install the dependencies
yarn install

# To run the tests
yarn test
```

### Deploying

Now, to deploy the project, everything is smoothed by using Dockers!

Make sure to intall [Docker](https://www.docker.com/) on your OS, and all you gotta do is run:

```
sh ./deploy.sh <version_of_docker_image (eg.: 0.0.1)>
```

If you can't run shell scripts, use:

```sh
# Builds the new version of the container
docker build -t covid_bot:<version_of_docker_image> .

# Stops currently running containers with the name of "covid_bot"
docker stop covid_bot

# Remove any container with the name of "covid_bot"
docker rm covid_bot

# Run the container with the new built image
docker run -d --name covid_bot -p 3000:3000 covid_bot:<version_of_docker_image>
```

Remember that even if you have an updated version of Windows 10, [you can run shell scripts on it](https://www.thewindowsclub.com/how-to-run-sh-or-shell-script-file-in-windows-10).

## Donating

If you want to help me to keep creating and serving open source projects, please:

[Buy me a Coffee](https://ko-fi.com/leoisso)