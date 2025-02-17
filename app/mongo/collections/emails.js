import { mongoConfig } from '../../config/index.js'
import handleDatabaseConnection from '../connect.js'

const emailsCollection = async () => {
  const db = await handleDatabaseConnection()
  return db.collection(mongoConfig.get('emailsCollection'))
}

export default emailsCollection
