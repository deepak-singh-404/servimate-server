const express = require('express')
const router = express.Router()
const passport = require('passport')


const { userLogin, userRegister} = require('../controller/userController')



//USER REGISTER
router.post('/register', userRegister)

// USER LOGIN
router.post('/login', userLogin)



module.exports = router