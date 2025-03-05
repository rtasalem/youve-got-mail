export const validateConfig = (...configs) => {
  configs.forEach(config => {
    config.validate({ allowed: 'strict' })
  })
  console.log('All config has been validated successfully.')
}
