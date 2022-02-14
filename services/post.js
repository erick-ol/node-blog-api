const { BlogPost, Category, User } = require('../models');

// Importação de categoryService
const categoryService = require('./category');

const create = async (postInfo) => {
  const { categoryIds } = postInfo;
  const promisesValidate = categoryIds.map(async (id) => {
    const category = await categoryService.getById(id);
    if (category) {
      return true;
    }
  });

  const categories = await Promise.all(promisesValidate);
  console.log(categories);
  const categoriesExist = categories.every((val) => val);

  if (!categoriesExist) return false;

  const newPost = await BlogPost.create(postInfo);
  return newPost;
};

const getAll = async () => {
  const posts = await BlogPost.getAll({
    attributes: { exclude: ['userId'] },
    include: [
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
        attributes: { exclude: ['createdAt', 'updatedAt'] } },
      { model: User, as: 'user', attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } },
    ],
  });
  return posts;
};

module.exports = {
  create,
  getAll,
};
