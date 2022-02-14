const { BlogPost } = require('../models');

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

module.exports = {
  create,
};
