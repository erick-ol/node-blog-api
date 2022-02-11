const { User } = require('../models');

const create = async (userInfo) => {
  const emailExists = await User.getByEmail(userInfo.email);
  if (emailExists) {
    return false;
  }

  const newUser = await User.create(userInfo);
  return newUser;
};

const login = async (loginInfo) => {
  const userInfo = await User.exists(loginInfo);
  console.log(userInfo);
  if (userInfo === null) {
    return false;
  }

  return userInfo;
};

module.exports = {
  create,
  login,
};
