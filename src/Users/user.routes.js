const express = require('express');
const { cadastroUser, loginUser, updateUser } = require('./user.controller');
const authenticateToken = require('../middleware/auth');
const router = express.Router()

router.post("/api/cadastro-user", cadastroUser);
router.post("/api/login-user", loginUser);
router.post('/api/stock', authenticateToken, (req, res) => {
  res.json({ message: `Bem-vindo!` });
});

module.exports = router;