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
  },
  connectionString: {
    doc: 'RabbitMQ connection string.',
    format: 'String',
    default: 'amqp://youve-got-mail-rabbitmq',
    env: 'MESSAGE_CONNECTION_STRING'
  },
  queues: {
    emails: {
      doc: 'Name of message queue for sending emails.',
      format: 'String',
      default: 'emails',
      env: 'MESSAGE_QUEUE_EMAILS'
    }
  }
})

config.validate({ allowed: 'strict' })

export default config
