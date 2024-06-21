#!/bin/bash

cd $PROJECT_FOLDER
echo "${YEL_B}[$PROJECT_NAME] tests running...${NC}"
yarn test
