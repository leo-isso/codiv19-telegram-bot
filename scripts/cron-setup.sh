#!/bin/bash
printf "5 * * * * /usr/local/bin/node /covid19-telegram-bot/dist/server.js --hourly\n" | crontab -
/etc/init.d/cron start