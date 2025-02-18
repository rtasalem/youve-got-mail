import express from 'express'
import { serverConfig } from './config/index.js'
import { health } from './routes/index.js'
import initialiseMongo from './mongo/init.js'
import receiveMessage from './messaging/receive.js'

const server = async () => {
  const app = express()
  const port = serverConfig.get('port')

  app.use(health)

  await initialiseMongo()
  await receiveMessage()

  app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
  })
}

export { server }
