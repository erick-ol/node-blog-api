module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  Category.getAll = () => Category.findAll();
  Category.getByName = (name) => Category.findOne({ where: { name } });
  Category.getById = (id) => Category.findByPk(id);

  return Category;
};
