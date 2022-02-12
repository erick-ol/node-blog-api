const validateUser = require('./validateUser');
const { validateToken } = require('./validateToken');
const { validateCategory } = require('./validateCategory');

module.exports = {
  validateUser,
  validateToken,
  validateCategory,
};
