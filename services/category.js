const { Category } = require('../models');

const create = async (categoryInfo) => {
  const categoryExist = await Category.getByName(categoryInfo.name);
  if (categoryExist) return false;

  const newCategory = await Category.create(categoryInfo);
  return newCategory;
};

const getAll = async () => {
  const categories = await Category.getAll();
  return categories;
};

const getById = async (id) => {
  const categories = await Category.getById(id);
  return categories;
};

module.exports = {
  create,
  getAll,
  getById,
};
