#!/bin/bash
mongod &
cd API/mongodb
ls -a
mongosh mongo-init.js
mongosh loadArticles.js
mongod --shutdown