.PHONEY: bootstrap setup seed start clean

bootstrap:
	yarn
	node_modules/.bin/lerna bootstrap --npm-client=yarn

setup: bootstrap
	echo 'DROP DATABASE IF EXISTS `gotandajs`' | mysql -uroot
	echo 'CREATE DATABASE `gotandajs`'         | mysql -uroot
	node_modules/.bin/sequelize db:migrate

seed: bootstrap
	node_modules/.bin/sequelize db:seed:all

start: bootstrap
	node_modules/.bin/lerna exec --scope @gotandajs/app -- ./bin/server

test: bootstrap
	node_modules/.bin/lerna run test

clean:
	rm -rf node_modules
	rm -rf packages/*/node_modules
