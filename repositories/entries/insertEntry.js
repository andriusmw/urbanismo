const getPool = require("../../database/getPool");

const insertEntry = async ({ title, description, userId }) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO entries (title, description, user_id) VALUES (?, ?, ?)",
    [title, description, userId]
  );

  return insertId;
};

module.exports = insertEntry;
