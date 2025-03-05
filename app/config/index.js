import { validateConfig } from './validate-config.js'
import serverConfig from './server.js'
import mongoConfig from './mongo.js'
import messageConfig from './message.js'
import nodemailerConfig from './nodemailer.js'

validateConfig(serverConfig, mongoConfig, messageConfig, nodemailerConfig)

export {
  serverConfig,
  mongoConfig,
  messageConfig,
  nodemailerConfig
}
