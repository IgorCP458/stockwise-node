const User = require('./user.model')
const { verifyEmail, createUser } = require('./utils/handleCadastro')
const { handleUserLogin } = require('./utils/handleLogin')

async function cadastroUser (req,res) {
  const userParams = req.body
  if(await verifyEmail(userParams.email)) {
    await createUser(userParams)
  } else {
    res.status(400).json({message: "Email já em uso!"})
  }
}

async function loginUser (req,res) {
  const {email, password} = req.body
  const compare = await handleUserLogin(email, password)
  if( compare ) {
    res.status(200).json({message: "Usuário logado com sucesso!"})
  } else {
    res.status(400).json({message: "Senha incorreta!"})

  }
}

async function updateUser (req,res) {
  res.send("Update")

}

module.exports = {cadastroUser, loginUser, updateUser}