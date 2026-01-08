const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');
const authenticateAdmin = require('../middleware/auth');

// Public routes
router.get('/', bankController.getBanks);
router.get('/:id', bankController.getBankById);

// Admin routes (Protected)
router.post('/', authenticateAdmin, bankController.createBank);
router.put('/:id', authenticateAdmin, bankController.updateBank);
router.delete('/:id', authenticateAdmin, bankController.deleteBank);

module.exports = router;
