FROM node:12.16.1
RUN mkdir -p /covid19-telegram-bot
WORKDIR /covid19-telegram-bot
COPY package.json .
RUN npm install
COPY ./scripts ./scripts
RUN chmod -R +x ./scripts
RUN sh ./scripts/cron-install.sh
COPY ./src ./src
COPY ./.env .
EXPOSE 8626
ENTRYPOINT ["./scripts/entrypoint.sh"]