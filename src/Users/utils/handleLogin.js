const User = require("../user.model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10;
require('dotenv').config()


const handleUserLogin = async (email, password,res) => {

  const user = await User.findOne({
    where:{
      email: email
    }
  })

  if(!user) {
    return false
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if(passwordMatch) {
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    return res.status(200).cookie('token', token, {
      httpOnly: true,       // Protege contra XSS
      secure: false,         // só envia por HTTPS (em produção)
      sameSite: 'Strict',   // evita CSRF
      maxAge: 15 * 1 * 1000 // 1 hora
    }).json({ message: 'Login com sucesso' });

  }
  return res.status(400).json({message: "Enail e senha incorretos!"})

}

module.exports = { handleUserLogin }
