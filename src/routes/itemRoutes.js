const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/item', itemController.createItem);
router.get('/items', itemController.getAllItems);
router.get('/item/:id', itemController.getItemById);
router.patch('/item/:id', itemController.updateItem);
router.delete('/item/:id', itemController.deleteItem);

module.exports = router;
