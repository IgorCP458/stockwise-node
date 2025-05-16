const express = require("express");
const sequelize = require("./database/database");
const app = express()

require('dotenv').config()

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


app.get('/', (req, res) => {
  res.send("Olá mundo!")
})

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na porta ", process.env.PORT)
})