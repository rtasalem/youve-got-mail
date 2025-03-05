export const validateConfig = (...configs) => {
  configs.forEach(config => {
    config.validate({ allowed: 'strict' })
  })
}
