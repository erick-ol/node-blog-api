const { userService } = require('../services');
const { sign, verify } = require('../utils/jwt');
const {
  CONFLICT_STATUS,
  CREATED_STATUS,
  BAD_REQUEST_STATUS,
  OK_STATUS,
  UNAUTHORIZED_STATUS,
} = require('../utils/statusCode');

const create = async (req, res) => {
  const userInfo = req.body;
  const newUser = await userService.create(userInfo);
  if (!newUser) return res.status(CONFLICT_STATUS).json({ message: 'User already registered' });

  const token = sign(userInfo);
  return res.status(CREATED_STATUS).json({ token });
};

const login = async (req, res) => {
  const loginInfo = req.body;
  const user = await userService.login(loginInfo);
  if (!user) return res.status(BAD_REQUEST_STATUS).json({ message: 'Invalid fields' });

  const token = sign(user.dataValues);
  return res.status(OK_STATUS).json({ token });
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;

  try {
    verify(authorization);

    const users = await userService.getAll();
    return res.status(OK_STATUS).json(users);
  } catch (err) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  create,
  login,
  getAll,
};
