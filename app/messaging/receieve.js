import amqp from 'amqplib'
import { messageConfig } from '../config/index.js'

const receiveMessage = async () => {
  const connection = await amqp.connect(messageConfig.get('connectionString'))
  const channel = await connection.createChannel()
  const queue = messageConfig.get('queues.emails')

  await channel.assertQueue(queue, { durable: false })
  console.log('Listening for messages...')

  channel.consume(queue, (message) => {
    console.log(`Received ${message.content.toString()}`)
  }, { noAck: true })
}

export default receiveMessage
