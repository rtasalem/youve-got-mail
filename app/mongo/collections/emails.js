import { mongoConfig } from '../../config/index.js'
import databaseConnection from '../connect.js'

const emailsCollection = async () => {
  const db = await databaseConnection()
  return db.collection(mongoConfig.get('emailsCollection'))
}

export default emailsCollection
