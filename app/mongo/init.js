const fs = require('fs')
const path = require('path')

const initMongo = async () => {
  try {
    const collectionsDir = path.join(__dirname, './collections')
    const files = fs.readdirSync(collectionsDir)

    const createCollections = files.map(async file => {
      const collectionName = `${file.split('.')[0]}Database`
      const collection = require(`./collection/${file}`)
      return collection[collectionName]()
    })

    const result = await Promise.allSettled(createCollections)
    result.forEach(res => {
      if (res.status === 'rejected') {
        throw new Error(res.reason.message)
      }
    })
  } catch (err) {
    throw new Error(`Failed to create collections: ${err.message}`)
  }
}

export default initMongo
