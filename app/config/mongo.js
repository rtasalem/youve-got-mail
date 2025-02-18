import convict from 'convict'
import convictFormatWithValidator from 'convict-format-with-validator'

convict.addFormats(convictFormatWithValidator)

const config = convict({
  url: {
    doc: 'MongoDB client URL.',
    format: 'String',
    default: 'mongodb://youve-got-mail-mongodb:27017',
    env: 'MONGO_CLIENT_URL'
  },
  databaseName: {
    doc: 'Name of MongoDB database.',
    format: 'String',
    default: 'youve-got-mail',
    env: 'MONGO_DATABASE_NAME'
  },
  emailsCollection: {
    doc: 'Name of MongoDB collection containing emails data.',
    format: 'String',
    default: 'emails',
    env: 'MONGO_EMAIL_COLLECTIONS'
  }
})

config.validate({ allowed: 'strict' })

export default config
