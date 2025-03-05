import convict from 'convict'
import convictFormatWithValidator from 'convict-format-with-validator'

convict.addFormats(convictFormatWithValidator)

const config = convict({
  host: {
    doc: 'Host that defines SMTP (Simple Mail Transfer Protocol).',
    format: 'String',
    default: 'smtp.ethereal.email',
    env: 'NODEMAILER_HOST'
  },
  port: {
    doc: 'Port for SMTP communication.',
    format: 'port',
    default: 587,
    env: 'NODEMAILER_PORT'
  },
  securePort: {
    doc: 'Boolean value that defines whether the port is secure.',
    format: 'Boolean',
    default: false,
    env: 'NODEMAILER_PORT_SECURE'
  },
  authenticationCredentials: {
    user: {
      doc: 'User email address.',
      format: 'String',
      default: 'test@ethereal.com',
      env: 'NODEMAILER_AUTH_USER'
    },
    password: {
      doc: 'Password associated with the user.',
      format: 'String',
      default: 'password',
      env: 'NODEMAILER_AUTH_PASSWORD'
    }
  }
})

export default config
