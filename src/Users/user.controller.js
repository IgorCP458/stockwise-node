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
  await handleUserLogin(email, password, res)

}



module.exports = {cadastroUser, loginUser}