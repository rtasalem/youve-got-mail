import express from 'express'
const router = express.Router()

router.get('/healthy', (req, res) => {
  res.send('ok')
})

router.get('/healthz', (req, res) => {
  res.send('ok')
})

export default router
