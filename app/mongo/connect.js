import { mongoClient } from '../clients/index.js'
import { mongoConfig } from '../config/index.js'

const connectToMongoDB = async () => {
  await mongoClient.connect()
  console.log('Connection to MongoDB server successful.')
  const db = mongoClient.db(mongoConfig.get('databaseName'))
  const collection = db.collection(mongoConfig.get('emailCollection'))

  const insertResult = await collection.insertMany([{ a: 4 }, { a: 5 }, { a: 6 }])
  console.log('Inserted documents =>', insertResult)

  const findResult = await collection.find({}).toArray()
  console.log('Found documents =>', findResult)
}

export default connectToMongoDB
