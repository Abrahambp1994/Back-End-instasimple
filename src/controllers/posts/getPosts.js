const { selectPostsByDate } = require("../../respositories/posts");

const getPosts = async (req, res, next) => {
  try {
    
    const posts = await selectPostsByDate();

    res.status(200).send({ status: "ok", data: posts });
  } catch (error) {
    next(error);
  }
};

module.exports = getPosts;
