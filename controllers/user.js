const { userService } = require('../services');
const { sign } = require('../utils/jwt');

const create = async (req, res) => {
  const userInfo = req.body;
  const newUser = await userService.create(userInfo);
  if (!newUser) return res.status(409).json({ message: 'User already registered' });

  const token = sign(userInfo);
  return res.status(201).json({ token });
};

module.exports = {
  create,
};
