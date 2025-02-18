# You've Got Mail!
Backend microservice for sending email notifications via RabbitMQ with all message event data stored in MongoDB.

## Prerequisites
- Node.js v23+
- Docker Compose

## Getting Started
Install dependencies:
```
npm install
```
Build Docker services:
```
docker compose build
```
Start up Docker containers:
```
docker compose up build -d
```

## Using RabbitMQ Management
After starting up the Docker containers, the RabbitMQ Management UI can be accessed via [http://localhost:15672/#/](http://localhost:15672/#/). Navigate to the [queues](http://localhost:15672/#/queues) tab, select the `emails` queue and open the `Publish message` dropdown. From here any messages can be published to the queue. Refer to the Docker container logs for confirmation that the message was received.
