#!/bin/bash
printf "0 * * * * /usr/local/bin/node /covid19-telegram-bot/dist/server.js\n" | crontab -
/etc/init.d/cron start