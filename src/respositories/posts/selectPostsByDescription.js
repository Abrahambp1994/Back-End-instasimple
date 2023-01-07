const getPool = require("../../database/getPool");

const selectPostsByDescription = async (queryParams) => {
  const pool = getPool();

  let sqlQuery =
    "SELECT image, description, creationDate FROM posts";

  let values = [];

  let clause = "WHERE";

  for (const key in queryParams) {

    const value = queryParams[key];

    sqlQuery += ` ${clause} ${key} LIKE ?`;

    values.push(`%${value}%`);

    clause = "AND";
  }

  sqlQuery += " GROUP BY id;";

  const [posts] = await pool.query(sqlQuery, values);

  return posts;
};

module.exports = selectPostsByDescription;