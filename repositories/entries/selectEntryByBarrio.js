const getPool = require("../../database/getPool");

const selectEntryByBarrio = async (barrioID) => {
  const pool = getPool();
  const [entries] = await pool.query(
    "SELECT * FROM entries WHERE neighborhood = ?",
    [barrioID]
  );
  return entries;
};

module.exports = selectEntryByBarrio;
