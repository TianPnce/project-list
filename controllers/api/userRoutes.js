const router = require('express').Router()
const { User, Ezlist } = require('../../models')

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [Ezlist]
    })
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', (req, res) => {
  User.findByPk(req.params.id, {
    include: [Ezlist]
  }).then(user => {
    const userHbsData = user.get({ plain: true });
    res.render("user", userHbsData)
  })
})

router.get('/search/:username', (req, res) => {
  User.findOne({
    where: { username: req.params.username },
    include: [Ezlist]
  }).then(user => {
    const userNameHbsData = user.get({ plain: true });
    res.render("user", userNameHbsData)
  })
})

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({ where: { username: req.body.username } })
    if (!dbUserData) {
      res.status(400).json({ message: 'Wrong username/password' })
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password)
    if (!validPassword) {
      res.status(400).json({ message: 'Wrong username/password' })
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id
      req.session.loggedIn = true
      req.session.cookie
      res.status(200).json({ user: dbUserData, message: 'Logged in' })
    })
  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})


module.exports = router
