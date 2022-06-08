const getPool = require("../../database/getPool");

const selectEntriesByBarrio = async () => {
  const pool = getPool();
  const [entries] = await pool.query(
    "SELECT * FROM entries WHERE neighborhood = ?"
  );
  return entries;
};

module.exports = selectEntriesByBarrio;
