const router = require('express').Router()
const { Ezlist, Item } = require('../../models')

router.get('/', async (req, res) => {
  try {
    const ezlistData = await Ezlist.findAll({
      include: [Item]
    })
    res.status(200).json(ezlistData)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/:id", (req, res) => {
  Ezlist.findByPk(req.params.id, { include: { all: true } })
    .then(ezlist => {
      const ezlistHbsData = ezlist.get({ plain: true });
      ezlistHbsData.loggedIn = req.session.loggedIn
      ezlistHbsData.validateUser = ezlist.dataValues.user_id === req.session.user_id
      res.render("list-details", ezlistHbsData)
    })
})

router.post('/', async (req, res) => {
  try {
    const newEzlistData = await Ezlist.create({
      ...req.body,
      user_id: req.session.user_id,
    })
    res.status(200).json(newEzlistData)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const ezlistData = await Ezlist.update(req.body, {
      where: {id: req.params.id}
    })
    if (!ezlistData[0]) {
      res.status(404).json({ message: 'No list found' });
      return;
    }
    res.status(200).json(ezlistData)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const ezlistData = await Ezlist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!ezlistData) {
      res.status(404).json({ message: 'No list found' });
      return;
    }
    res.status(200).json(ezlistData)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router