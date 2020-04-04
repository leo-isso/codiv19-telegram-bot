FROM node:12.16.1
RUN mkdir -p /covid19-telegram-bot
WORKDIR /covid19-telegram-bot
COPY package.json .
RUN yarn install
RUN yarn global add serve
COPY ./scripts ./scripts
RUN chmod -R +x ./scripts
RUN sh ./scripts/cron-install.sh
COPY ./src ./src
COPY ./.env .
EXPOSE 3000
ENTRYPOINT ["./scripts/entrypoint.sh"]
