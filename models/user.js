module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  User.getAll = () => User.findAll();
  User.getById = (id) => User.findByPk(id);
  User.getByEmail = (email) => User.findOne({ where: { email } });
  User.exists = ({ email, password }) => User.findOne({ where: {
    email,
    password,
  } });

  return User;
};
