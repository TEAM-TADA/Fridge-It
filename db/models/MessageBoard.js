const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://uskepgdp:KpVLivhPtrF6REmckMrZt3nC99K8hTgV@elmer.db.elephantsql.com:5432/uskepgdp');

const Users = sequelize.define('users', {
  name: {
    type: STRING
  }
})

const Fridge = sequelize.define('fridge', {
  number: {
    type: INTEGER
  }
})

const FridgeItems = sequelize.define('fridgeItems', {
  name: {
    type: STRING
  },
  quntity: {
    type: INTEGER
  },
  type: {
    type: STRING
  }
})

const MessageInfo = sequelize.define('messageBoard', {
  messageText: {
    type: STRING
  }
})

Users.belongsTo(Fridge);
Fridge.hasMany(Users);
Fridge.hasMany(FridgeItems);
Fridge.hasMany(MessageInfo);





