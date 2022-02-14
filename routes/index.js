const user = require('express').Router();
const login = require('express').Router();
const category = require('express').Router();
const post = require('express').Router();

// Import Controllers
const {
  userController,
  categoryController,
  postController,
} = require('../controllers');

// Import Middlewares
const {
  validateUser,
  validatePost,
  validateToken,
  validateCategory,
} = require('../controllers/middlewares');

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
user.get(
  '/:id',
  validateToken,
  userController.getById,
);

// Login methods
login.post(
  '/',
  validateUser.validateEmail,
  validateUser.validatePassword,
  userController.login,
);

// Category methods
category.post(
  '/',
  validateCategory,
  validateToken,
  categoryController.create,
);
category.get(
  '/',
  validateToken,
  categoryController.getAll,
);

// Post methods
post.post(
  '/',
  validateToken,
  validatePost.validateTitle,
  validatePost.validateContent,
  validatePost.validateCategory,
  postController.create,
);
post.get(
  '/',
  validateToken,
  postController.getAll,
);

module.exports = {
  user,
  login,
  category,
  post,
};
