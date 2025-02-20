const jwt =require('jsonwebtoken');
const secretKey='secret'

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

const decrypt = (token) => {
  // return decoded payload
  try{
    return jwt.verify(token, secretKey);
  }catch(er){
    console.log('Decryption failed:', er.message)
    return null;
  }
}

module.exports = {
  encrypt,
  decrypt
}

