const Joi = require('joi');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  const { error: tokenRequiredErr } = Joi.string().required().validate(authorization);
  if (tokenRequiredErr) {
    return res.status(401).json({
      message: 'Token not found' });
  }

  next();
};

module.exports = {
  validateToken,
};
