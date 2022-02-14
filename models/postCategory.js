const associate = (models) => {
  models.BlogPost.belongsToMany(models.Category, {
    as: 'categories',
    through: models.PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId',
  });

  models.Category.belongsToMany(models.BlogPost, {
    as: 'products',
    through: models.PostCategory,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
};

module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostCategory',
    {},
    {
      tableName: 'PostsCategories',
      timestamps: false,
    },
  );

  PostsCategories.associate = associate;

  return PostsCategories;
};
