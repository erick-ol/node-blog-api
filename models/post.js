module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
    },
    {
      timestamps: false,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  BlogPost.getAll = () => BlogPost.findAll();
  BlogPost.getByName = (name) => BlogPost.findOne({ where: { name } });

  return BlogPost;
};
