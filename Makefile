.PHONY: %.install %.start install db.* up down

%.install:
	cd $* && npm install

%.start:
	cd $* && npm start

install: server.install client.install

db.up:
	docker-compose up -d

db.init:
	cd server && npm run db:init

db.down:
	docker-compose down

up: db.up db.init
	make server.start & make client.start

down: db.down