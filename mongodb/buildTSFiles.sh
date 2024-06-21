yarn tsc --project tsconfig.cardsGenerator.json
mkdir -p ../dist/common/tests/cardsGenerator/static
cp -ar ../common/tests/cardsGenerator/mockedImages/. ../dist/common/tests/cardsGenerator/static/
yarn tsc --project tsconfig.logger.json
yarn tsc
