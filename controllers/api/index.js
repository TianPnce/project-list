const router = require('express').Router()
const userRoutes = require('./userRoutes')
const ezlistRoutes = require('./ezlistRoutes')
const itemRoutes = require('./itemRoutes')
const emailRoutes = require('./emailRoutes')

router.use('/users', userRoutes)
router.use('/ezlists', ezlistRoutes)
router.use('/items', itemRoutes)
router.use('/mailer', emailRoutes)

module.exports = router;