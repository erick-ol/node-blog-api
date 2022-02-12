const user = require('express').Router();
const login = require('express').Router();

// Import Controllers
const {
  userController,
} = require('../controllers');

// Import Middlewares
const { validateUser, validateToken } = require('../controllers/middlewares');

// User methods
user.post(
  '/',
  validateUser.validateName,
  validateUser.validateEmail,
  validateUser.validatePassword,
  userController.create,
);
user.get(
  '/',
  validateToken,
  userController.getAll,
);

// Login methods
login.post(
  '/',
  validateUser.validateEmail,
  validateUser.validatePassword,
  userController.login,
);

module.exports = {
  user,
  login,
};
