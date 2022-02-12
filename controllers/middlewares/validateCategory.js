const Joi = require('joi');
const { BAD_REQUEST_STATUS } = require('../../utils/statusCode');

const validateCategory = async (req, res, next) => {
  const { name } = req.body;

  const { error: nameRequiredErr } = Joi.string().required().validate(name);
  if (nameRequiredErr) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: '"name" is required' });
  }

  next();
};

module.exports = {
  validateCategory,
};
