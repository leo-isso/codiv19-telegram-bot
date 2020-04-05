#!/bin/bash
version=$1
container="covid_bot:$version"
echo "=> Building image:\n$version"
docker build -t $container .
echo "\n=> Stoping container:"
docker stop covid_bot
echo "\n=> Removing container:"
docker rm covid_bot
echo "\n=> Running container:\n$version"
docker run -d --name covid_bot -p 3000:3000 $container