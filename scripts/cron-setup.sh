#!/bin/bash
cat - /covid19-telegram-bot/scripts/cron-scripts | crontab -
/etc/init.d/cron start