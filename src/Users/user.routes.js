const express = require('express');
const { cadastroUser, loginUser, updateUser } = require('./user.controller');
const router = express.Router()

router.get("/cadastro-user", cadastroUser);
router.get("/login-user", loginUser);
router.get("/update-user", updateUser);

module.exports = router;