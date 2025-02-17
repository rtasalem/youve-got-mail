import amqp from 'amqplib/callback_api'

const sendToQueue = (queue, msg) => {
  return new Promise((resolve, reject) => {
    amqp.connect('amqp://localhost', (error0, connection) => {
      if (error0) {
        return reject(error0)
      }
      connection.createChannel((error1, channel) => {
        if (error1) {
          return reject(error1)
        }

        channel.assertQueue(queue, { durable: false })
        channel.sendToQueue(queue, Buffer.from(msg))

        console.log(` [x] Sent: ${msg}`)

        setTimeout(() => {
          connection.close()
          resolve(`Message "${msg}" sent to queue: ${queue}`)
        }, 500)
      })
    })
  })
}

export default sendToQueue
