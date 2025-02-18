import amqp from 'amqplib'

const sendMessage = async () => {
  const connection = await amqp.connect('amqp://localhost')
  const channel = await connection.createChannel()
  const queue = 'hello'

  await channel.assertQueue(queue, { durable: false })
  channel.sendToQueue(queue, Buffer.from('Hello, RabbitMQ!'))

  console.log(" [x] Sent 'Hello, RabbitMQ!'")
  setTimeout(() => { connection.close(); process.exit(0) }, 500)
}

export default sendMessage
