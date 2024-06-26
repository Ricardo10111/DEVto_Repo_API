const createError = require('http-errors');

const Users = require('../models/users.model');
const encrypt = require('../lib/encrypt');
const jwt = require('../lib/jwt');

async function logIn(email, password) {
  const user = await Users.findOne({ email: email });
  if (!user) throw createError(401, 'Invalid data');

  const isPasswordValid = await encrypt.compare(password, user.password);
  if (!isPasswordValid) throw createError(401, 'Invalid data');

  const token = jwt.sign({ id: user._id });
  const id = user._id;
  
  return { token, id }; // Devuelve un objeto con token e id
}

module.exports = { logIn }
