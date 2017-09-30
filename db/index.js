const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL);

const Users = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  }
})

const Fridge = sequelize.define('fridge', {
  users: {
    type: Sequelize.ARRAY({type: Sequelize.INTEGER})
  },
  name: {
    type: Sequelize.STRING
  }
})

const FridgeItems = sequelize.define('fridgeItem', {
  name: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.STRING
  }
})

const MessageInfo = sequelize.define('messageInfo', {
  messageText: {
    type: Sequelize.STRING
  },
  like: {
    type: Sequelize.INTEGER
  }
})

FridgeItems.belongsTo(Fridge, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});
Fridge.hasMany(FridgeItems, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});

MessageInfo.belongsTo(Fridge, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});
Fridge.hasMany(MessageInfo, {foreignKey: 'fridgeId', allowNull: true, onDelete: 'CASCADE'});

MessageInfo.belongsTo(Users, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});
Users.hasMany(MessageInfo, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});

FridgeItems.belongsTo(Users, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});
Users.hasMany(FridgeItems, {foreignKey: 'userId', allowNull: false, onDelete: 'CASCADE'});

module.exports.users = Users;
module.exports.fridge = Fridge;
module.exports.fridgeItems = FridgeItems;
module.exports.messageInfo = MessageInfo;
