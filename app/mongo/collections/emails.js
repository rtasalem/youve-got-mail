import { mongoConfig } from '../../config/index.js'
import initialiseDatabaseConnection from '../init.js'

const emailsCollection = async () => {
  const db = await initialiseDatabaseConnection()
  return db.collection(mongoConfig.get('collections.emails'))
}

export default emailsCollection
