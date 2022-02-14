const validateUser = require('./validateUser');
const validatePost = require('./validatePost');
const { validateToken } = require('./validateToken');
const { validateCategory } = require('./validateCategory');

module.exports = {
  validateUser,
  validatePost,
  validateToken,
  validateCategory,
};
