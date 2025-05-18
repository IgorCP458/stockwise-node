const express = require('express');
const { cadastroUser, loginUser, updateUser } = require('./user.controller');
const router = express.Router()

router.post("/api/cadastro-user", cadastroUser);
router.post("/api/login-user", loginUser);
router.get("/api/update-user", updateUser);

module.exports = router;