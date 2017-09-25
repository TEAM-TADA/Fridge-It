const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL);

const Users = sequelize.define('users', {
  name: {
    type: STRING
  },
  password: {
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
FridgeItems.belongsTo(Fridge);
Fridge.hasMany(MessageInfo);
MessageInfo.belongsTo(Fridge);

sequelize.sync({force:false});

module.exports.users = Users;
module.exports.fridge = Fridge;
module.exports.fridgeItems = FridgeItems;
module.exports.messageInfo = MessageInfo;


