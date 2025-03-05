const express = require('express');
const router = express.Router();
const { loginController, logoutController } = require('../controllers/auth.controller');

router.post('/login', loginController);
router.post('/logout', logoutController);

module.exports = router;