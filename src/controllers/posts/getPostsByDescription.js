const { selectPostsByDescription } = require("../../respositories/posts");
const { filterPostsSchema } = require("../../schema/posts");

const getPostsByDescription = async (req, res, next) => {
  try {

    await filterPostsSchema.validateAsync(req.query);

    const posts = await selectPostsByDescription(req.query);

    res.status(200).send({ status: "ok", data: posts });
  } catch (error) {
    next(error);
  }
};

module.exports = getPostsByDescription;