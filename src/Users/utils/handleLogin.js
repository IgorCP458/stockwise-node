const User = require("../user.model");
const bcrypt = require('bcrypt')
const saltRounds = 10;

const handleUserLogin = async (email, password) => {

  const user = await User.findOne({
    where:{
      email: email
    }
  })

  if(!user) {
    return false
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  return passwordMatch


}

module.exports = { handleUserLogin }

