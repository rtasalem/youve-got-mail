import amqp from 'amqplib'

const receiveMessage = async () => {
  const connection = await amqp.connect('amqp://localhost')
  const channel = await connection.createChannel()
  const queue = 'hello'

  await channel.assertQueue(queue, { durable: false })
  console.log(' [*] Waiting for messages...')

  channel.consume(queue, (msg) => {
    console.log(` [x] Received ${msg.content.toString()}`)
  }, { noAck: true })
}

export default receiveMessage
