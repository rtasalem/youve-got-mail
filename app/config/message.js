import convict from 'convict'
import convictFormatWithValidator from 'convict-format-with-validator'

convict.addFormats(convictFormatWithValidator)

const config = convict({
  credentials: {
    user: {
      doc: 'Default guest user for RabbitMQ.',
      format: 'String',
      default: 'guest',
      env: 'MESSAGE_DEFAULT_USER'
    },
    password: {
      doc: 'Password associated with default guest user for RabbitMQ.',
      format: 'String',
      default: 'guest',
      env: 'MESSAGE_DEFAULT_PASSWORD'
    }
  }
})

config.validate({ allowed: 'strict' })

export default config
