const express = require('express')
const router = express.Router()
const User = require('..//models/user')
// const passport = require('../passport')


router.post('/', (req, res) => {
    console.log('user signup')
}),


module.exports = router