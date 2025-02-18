import { emailsCollection } from './collections/index.js'

const initialiseMongo = async () => {
  try {
    const collections = {}
    collections.emails = await emailsCollection()
    return collections
  } catch (error) {
    throw new Error(`Failed to create collections: ${error.message}`)
  }
}

export default initialiseMongo
