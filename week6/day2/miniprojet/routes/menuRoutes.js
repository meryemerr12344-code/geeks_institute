const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menuController');

router.get('/', MenuController.getMenu);
router.get('/:name', MenuController.getMenuItem);
router.post('/', MenuController.addMenuItem);
router.put('/:id', MenuController.updateMenuItem);
router.delete('/:id', MenuController.deleteMenuItem);

module.exports = router;