const { categoryService } = require('../services');
const { verify } = require('../utils/jwt');
const {
  CONFLICT_STATUS,
  CREATED_STATUS,
  UNAUTHORIZED_STATUS,
  OK_STATUS,
} = require('../utils/statusCode');

const create = async (req, res) => {
  const categoryInfo = req.body;

  const { authorization } = req.headers;
  
  try {
    verify(authorization);

    const newCategory = await categoryService.create(categoryInfo);
    if (!newCategory) {
      return res.status(CONFLICT_STATUS).json({ message: 'Category already registered' });
    }

    return res.status(CREATED_STATUS).json(newCategory);
  } catch (err) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;

  try {
    verify(authorization);

    const categories = await categoryService.getAll();
    return res.status(OK_STATUS).json(categories);
  } catch (err) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  create,
  getAll,
};
