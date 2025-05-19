// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado. Acesso negado.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
    if (err) {
      return res.status(401).json({message: "Token inválido ou expirado."});
    }

    req.user = userData; // Adiciona os dados decodificados à requisição
    next(); // Libera acesso
  });
};

module.exports = authenticateToken;