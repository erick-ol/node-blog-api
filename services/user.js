const { User } = require('../models');

const create = async (userInfo) => {
  const emailExists = await User.getByEmail(userInfo.email);
  if (emailExists) {
    return false;
  }

  const newUser = await User.create(userInfo);
  return newUser;
};

module.exports = {
  create,
};
