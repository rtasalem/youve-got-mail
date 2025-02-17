import { mongoConfig } from '../../config/index.js'
import initialiseDatabaseConnection from '../init.js'

const smsCollection = async () => {
  try {
    const db = await initialiseDatabaseConnection()
    return db.collection(mongoConfig.get('collections.sms'))
  } catch (error) {
    throw new Error('Collection could not be created:', error)
  }
}

export default smsCollection
