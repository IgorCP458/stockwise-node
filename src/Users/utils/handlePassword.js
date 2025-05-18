const bcrypt = require('bcrypt');
const User = require('../user.model')

const saltRounds = 10;

const handleHashPassword = async (plainTextPassword) => {
  
}

const handleComparePassword = async (password, hash) => {

}

module.exports = {handleComparePassword, handleHashPassword}