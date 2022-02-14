const Joi = require('joi');
const { BAD_REQUEST_STATUS } = require('../../utils/statusCode');

const validateTitle = async (req, res, next) => {
  const { title } = req.body;

  const { error: titleRequiredErr } = Joi.string().required().validate(title);
  if (titleRequiredErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"title" is required' });
  }

  next();
};

const validateContent = async (req, res, next) => {
  const { content } = req.body;

  const { error: contentRequiredErr } = Joi.string().required().validate(content);
  if (contentRequiredErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"content" is required' });
  }

  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  const { error: categoryRequiredErr } = Joi.array().required().validate(categoryIds);
  if (categoryRequiredErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"categoryIds" is required' });
  }

  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategory,
};
