#!/bin/bash
set -e
echo -e "\033[32m Начало инициализации базы данных \033[39m"
rm database -rf
rm mongodb -rf
cd ../dockerFiles
docker compose -f mongoInit.yml build && docker image prune -f && docker compose -f mongoInit.yml run --rm mongodb
cd ../mongodb
mkdir "mongodb"
chown -R 999:999 ./mongodb
chown -R 999:999 ./database
echo -e "\033[32m База данных успешно проинициализирована \033[39m"
