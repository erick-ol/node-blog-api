const { userService } = require('../services');
const { sign, verify } = require('../utils/jwt');

const create = async (req, res) => {
  const userInfo = req.body;
  const newUser = await userService.create(userInfo);
  if (!newUser) return res.status(409).json({ message: 'User already registered' });

  const token = sign(userInfo);
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const loginInfo = req.body;
  const user = await userService.login(loginInfo);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const token = sign(user.dataValues);
  return res.status(200).json({ token });
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;

  try {
    verify(authorization);

    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  create,
  login,
  getAll,
};
