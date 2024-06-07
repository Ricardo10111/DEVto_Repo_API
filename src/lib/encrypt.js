const bcrypt = require('bcryptjs')

const SALTS_ROUNDS = 10

function encrypt(password) {
  return bcrypt.hash(password, SALTS_ROUNDS)
}

function compare(password, hash) {
  return bcrypt.compareSync(password, hash)
}

module.exports = {
  encrypt,
  compare
}
