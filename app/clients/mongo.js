import { MongoClient } from 'mongodb'
import { mongoConfig } from '../config/index.js'

const mongoClient = new MongoClient(mongoConfig.get('url'))

export default mongoClient
