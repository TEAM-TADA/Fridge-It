const router = require('express').Router();
const messages = require('../controller/messageController')
const fridge = require('../controller/fridgeController')
const item = require('../controller/itemController')
const search = require('../controller/searchController');

// Messages Routes
router.get('/allMessages/:id', messages.getMessages)
router.post('/allMessages', messages.postMessages)
router.delete('/allMessages/:messageId', messages.deleteMessages)
router.patch('/allMessages/:id', messages.updateMessages)

// Fridge Routes
router.post('/fridge', fridge.addFridge)
router.get('/fridge/:fridgeId', fridge.getFridge)
router.delete('/fridge/:fridgeId', fridge.deleteFridge)

// Items Routes
router.get('/items/:fridgeId', item.getAllItems)
router.post('/items', item.addItem)
router.post('/items/:id', item.updateItem)
router.delete('/items/:id', item.deleteItem)

// Search Routes
router.route('/search')
  .put(search.getRecipes);

// Test User Routes
const db = require('../../db');
router.post('/user', (req, res) => {
  db.users.create({
    name: req.body.name
  })
  .then(user => {
    res.status(201).send(user);
  })
  .catch(err => {
    console.log('err creating test user: ', err);
    res.status(400).send(err);
  });
});
module.exports = router;