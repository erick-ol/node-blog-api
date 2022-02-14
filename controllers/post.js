const { postService } = require('../services');
const { verify } = require('../utils/jwt');
const {
  // CONFLICT_STATUS,
  CREATED_STATUS,
  UNAUTHORIZED_STATUS,
  BAD_REQUEST_STATUS,
  OK_STATUS,
} = require('../utils/statusCode');

const create = async (req, res) => {
  const postInfo = req.body;
  const { authorization } = req.headers;
  
  try {
    const user = verify(authorization);

    const newPost = await postService.create({ ...postInfo, userId: user.id });
    if (!newPost) {
      return res.status(BAD_REQUEST_STATUS).json({ message: '"categoryIds" not found' });
    }

    return res.status(CREATED_STATUS).json(newPost);
  } catch (err) {
    console.log(err);
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  
  try {
    verify(authorization);

    const posts = await postService.getAll();
    return res.status(OK_STATUS).json(posts);
  } catch (err) {
    console.log(err);
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  create,
  getAll,
};
