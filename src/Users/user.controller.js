const User = require('./user.model')

async function cadastroUser (req,res) {
  res.send("Cadastro")
}

async function loginUser (req,res) {
  res.send("Login")

}

async function updateUser (req,res) {
  res.send("Update")

}

module.exports = {cadastroUser, loginUser, updateUser}