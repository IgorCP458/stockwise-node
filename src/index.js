const express = require("express");
const sequelize = require("./database/database");
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(cookieParser());
app.use(express.json());
app.use(require('body-parser').json());
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // ou '*', com cautela
  credentials: true // permite cookies entre domínios
}));  
require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// Conectando ao Banco de Dados
;(async () => {
  
  try {
    await sequelize.authenticate();
    console.log('Conexão feita com o banco de dados! 🚀');
  } catch (error) {
    console.error('Erro na conexão com o banco de dados', error);
  }
})()

const User = require('./Users/user.model')

//Configurando os Routers
const userRouter = require('./Users/user.routes');
app.use('/', userRouter)



app.get('/api/auth/check', (req, res) => {
  const token = req.cookies.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ loggedIn: true, user: decoded }); // pode retornar o nome ou e-mail também
  } catch (err) {
    return res.status(401).json({ loggedIn: false });
  }
});

app.get('/', (req, res) => {
  res.send("Olá mundo!")
})

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na porta ", process.env.PORT)
})