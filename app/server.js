import express from 'express'
import { serverConfig } from './config/index.js'
import { health } from './routes/index.js'
import initMongo from './mongo/init.js'
import sendToQueue from './messaging/send.js'

const server = async () => {
  const app = express()
  const port = serverConfig.get('port')

  app.use(health)

  await initMongo()
  await sendToQueue('hello', 'hello world')

  app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
  })
}

export { server }
