const router = require('express').Router()
const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, //helloezlist@gmail.com
    pass: process.env.PASSWORD //chhiqcvjriedxbhd
  }
})

router.post('/', (req, res) => {
  const email = transporter.sendMail(req.body, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Sent!' + info.response);
    }
  })
  res.status(200).json(email)
})

module.exports = router