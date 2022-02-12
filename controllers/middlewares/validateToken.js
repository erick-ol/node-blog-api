const Joi = require('joi');
const { UNAUTHORIZED_STATUS } = require('../../utils/statusCode');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  const { error: tokenRequiredErr } = Joi.string().required().validate(authorization);
  if (tokenRequiredErr) {
    return res.status(UNAUTHORIZED_STATUS).json({
      message: 'Token not found' });
  }

  next();
};

module.exports = {
  validateToken,
};
