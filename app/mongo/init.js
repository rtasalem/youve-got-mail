import { emailsCollection } from './collections/index.js'

const initMongo = async () => {
  try {
    const collections = {}
    collections.emails = await emailsCollection()
    return collections
  } catch (error) {
    throw new Error(`Failed to create collections: ${error.message}`)
  }
}

export default initMongo
