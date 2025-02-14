import { mongoClient } from '../clients/index.js'
import { mongoConfig } from '../config/index.js'

let db

const handleDatabaseConnection = async () => {
  try {
    if (!db) {
      await mongoClient.connect()
      console.log('Connection to MongoDB server successful.')
      db = mongoClient.db(mongoConfig.get('databaseName'))
    }
    return db
  } catch (error) {
    throw new Error('No database found.')
  }
}

export default handleDatabaseConnection
