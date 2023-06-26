const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ezlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ezlist',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item'
  }
)

module.exports = Item