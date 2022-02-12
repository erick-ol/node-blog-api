const { Category } = require('../models');

const create = async (categoryInfo) => {
  const categoryExist = await Category.getByName(categoryInfo.name);
  if (categoryExist) return false;

  const newCategory = await Category.create(categoryInfo);
  return newCategory;
};

module.exports = {
  create,
};
