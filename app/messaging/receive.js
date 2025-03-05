import amqp from 'amqplib'
import { messageConfig } from '../config/index.js'

const receiveMessage = async () => {
  const connection = await amqp.connect(messageConfig.get('connectionString'))
  const channel = await connection.createChannel()
  const queue = messageConfig.get('queues.emails')

  channel.assertQueue(queue, { durable: false })
  console.log(`Listening to queue: ${queue}`)

  channel.consume(queue, (message) => {
    console.log(`Received new message: ${message.content.toString()}`)
  })
}

export default receiveMessage
