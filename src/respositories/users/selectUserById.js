const getPool = require("../../database/getPool");

const selectUserById = async (id) => {
  const pool = getPool();

  const [[user]] = await pool.query("SELECT name FROM users WHERE id = ?", [id]);

  return user;
};

module.exports = selectUserById;