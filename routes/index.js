const user = require('express').Router();

// Import Controllers
const {
  userController,
} = require('../controllers');

// Import Middlewares
const { validateUser } = require('../controllers/middlewares');

// User methods
user.post(
  '/',
  validateUser.validateName,
  validateUser.validateEmail,
  validateUser.validatePassword,
  userController.create,
);

module.exports = {
  user,
};
