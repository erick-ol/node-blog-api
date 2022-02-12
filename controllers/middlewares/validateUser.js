const Joi = require('joi');
const { BAD_REQUEST_STATUS } = require('../../utils/statusCode');

const validateName = async (req, res, next) => {
  const { displayName } = req.body;

  const { error: nameLengthErr } = Joi.string().min(8).validate(displayName);
  if (nameLengthErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const { error: emailEmptyErr } = Joi.string().empty().validate(email);
  if (emailEmptyErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"email" is not allowed to be empty' });
  }

  const { error: emailRequiredErr } = Joi.string().required().validate(email);
  if (emailRequiredErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"email" is required' });
  }

  const { error: emailInvalidErr } = Joi.string().email().validate(email);
  if (emailInvalidErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  const { error: passwordEmptyErr } = Joi.string().empty().validate(password);
  if (passwordEmptyErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"password" is not allowed to be empty' });
  }

  const { error: passwordRequiredErr } = Joi.string().required().validate(password);
  if (passwordRequiredErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"password" is required' });
  }

  const { error: passwordLengthErr } = Joi.string().length(6).validate(password);
  if (passwordLengthErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
