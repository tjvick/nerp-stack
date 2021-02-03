.PHONY: %.install %.start install up down

%.install:
	cd $* && npm install

%.start:
	cd $* && npm start

install: server.install client.install

up:
	docker-compose up -d
	make server.start & make client.start

down:
	docker-compose down