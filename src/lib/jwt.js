const jasonwebtoken = require('jsonwebtoken')

const { JWT_SECRET } = process.env

function sign(payload) {
  return jasonwebtoken.sign(payload, JWT_SECRET)
}

function verify(token) {
  return jasonwebtoken.verify(token, JWT_SECRET)
}

module.exports = {
  sign,
  verify
}
