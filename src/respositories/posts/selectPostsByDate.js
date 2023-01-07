const getPool = require("../../database/getPool");

const selectPostsByDate = async () => {
  const pool = getPool();

  const [post] = await pool.query(
    "SELECT users.name, posts.description, posts.image, posts.creationDate FROM users LEFT JOIN posts ON users.id = posts.userId ORDER BY creationDate DESC, name"
  );

  return post;
};

module.exports = selectPostsByDate;
