#!/bin/bash
printf "0 * * * * echo 'entry' >> node .\/server.js\n" | crontab -
/etc/init.d/cron start