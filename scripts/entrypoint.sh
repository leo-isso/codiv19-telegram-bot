#!/bin/bash
yarn build
sh ./scripts/cron-setup.sh

serve -p 3000 .