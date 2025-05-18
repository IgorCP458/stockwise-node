const User = require("../user.model");
const bcrypt = require('bcrypt')
const saltRounds = 10;

const verifyEmail = async (email) => {
  const userWithSameEmail = await User.findOne({
    where: {
      email: email
    }
  });
  if(userWithSameEmail !== null) {
    return false
  } else if (userWithSameEmail === null) {
    return true
  }
  
}

const createUser = async (userParams) => {
  var hashPassword = 'oi'
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
        console.log("Erro ao gerar Salt")
        return;
    }
    
    // Salt generation successful, proceed to hash the password
    var hashPassword = ''; // Replace with the actual password
    bcrypt.hash(userParams.password, salt, (err, hash) => {
        if (err) {
            // Handle error
            return;
        }

        // Hashing successful, 'hash' contains the hashed password
        hashPassword = hash
        const user = User.create({
          firstName: userParams.name,
          lastName: userParams.surname,
          email: userParams.email,
          password: hashPassword,
          role: 'default',
        }).then().catch( (error) => {
          console.log("Erro ao criar usuário", error)
        })


    });
    });
  console.log(hashPassword);


  
}

module.exports = {createUser, verifyEmail}