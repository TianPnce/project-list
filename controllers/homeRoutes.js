const express = require('express');
const router = express.Router();
const { Ezlist, User } = require('../models');

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id
  })
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/profile')
  }
  res.render('login', {
    loggedIn: false,
    user_id: null
  })
})

router.get("/profile", (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect("/login")
  }
  User.findByPk(req.session.user_id, {
    include: [Ezlist]
  })
  .then(userData => {
      const hbsData = userData.toJSON()
      hbsData.loggedIn = true
      hbsData.user_id = req.session.user_id
      res.render("profile", hbsData)
    })
})

router.get("/viewallusers", (req, res) => {
  User.findAll().then(alluserData => {
    const alluserDataHbsData = alluserData.map(allusers => allusers.get({ plain: true }))
    res.render("allusers", alluserDataHbsData)
  })
})

module.exports = router