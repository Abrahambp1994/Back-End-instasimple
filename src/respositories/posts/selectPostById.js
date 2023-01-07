const getPool = require("../../database/getPool");

const selectPostById = async (id) => {
  const pool = getPool();

  const [[post]] = await pool.query(
    "SELECT * FROM posts WHERE id = ?;",
    [id]
  );

  return post;
};

module.exports = selectPostById;
