const User = require('./User')
const Ezlist = require('./Ezlist')
const Item = require('./Item')

User.hasMany(Ezlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Ezlist.belongsTo(User, {
  foreignKey: 'user_id'
})

Ezlist.hasMany(Item, {
  foreignKey: 'ezlist_id',
  onDelete: 'CASCADE'
})

Item.belongsTo(Ezlist, {
  foreignKey: 'ezlist_id'
})

module.exports = { User, Ezlist, Item }