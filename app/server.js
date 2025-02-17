import express from 'express'
import { serverConfig } from './config/index.js'
import { health } from './routes/index.js'
import createMongoCollections from './mongo/create-collections.js'

const server = async () => {
  const app = express()
  const port = serverConfig.get('port')

  app.use(health)

  await createMongoCollections()

  app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
  })
}

export { server }
