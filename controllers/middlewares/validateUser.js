const Joi = require('joi');

const validateName = async (req, res, next) => {
  const { displayName } = req.body;

  const { error: nameLengthErr } = Joi.string().min(8).validate(displayName);
  if (nameLengthErr) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const { error: emailRequiredErr } = Joi.string().required().validate(email);
  if (emailRequiredErr) {
    return res.status(400).json({
      message: '"email" is required' });
  }

  const { error: emailInvalidErr } = Joi.string().email().validate(email);
  if (emailInvalidErr) {
    return res.status(400).json({
      message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  const { error: passwordRequiredErr } = Joi.string().required().validate(password);
  if (passwordRequiredErr) {
    return res.status(400).json({
      message: '"password" is required' });
  }

  const { error: passwordLengthErr } = Joi.string().length(6).validate(password);
  if (passwordLengthErr) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
