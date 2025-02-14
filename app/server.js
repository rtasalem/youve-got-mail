import express from 'express'
import { serverConfig } from './config/index.js'
import { health } from './routes/index.js'
import handleDatabaseConnection from './mongo/connect.js'

const server = async () => {
  const app = express()
  const port = serverConfig.get('port')

  app.use(health)

  await handleDatabaseConnection()

  app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
  })
}

export { server }
