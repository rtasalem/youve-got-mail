import express from 'express'
import { serverConfig } from './config/index.js'
import { health } from './routes/index.js'
import initMongo from './mongo/init.js'
import sendMessage from './messaging/send.js'
import receiveMessage from './messaging/receieve.js'

const server = async () => {
  const app = express()
  const port = serverConfig.get('port')

  app.use(health)

  await initMongo()
  await sendMessage()
  await receiveMessage()

  app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
  })
}

export { server }
