const {
  getEntryByBarrio,
  updateEntryById,
} = require("../../repositories/entries");
const { generateError } = require("../../helpers");

const editEntry = async (req, res, next) => {
  try {
    const { idEntry } = req.params;

    const entryDB = await getEntryByBarrio(idEntry);

    if (!entryDB) {
      generateError("Entry does not exist", 404);
    }

    const userId = req.auth.id;

    if (entryDB.role !== "admin") {
      generateError("Only admin users can edit entries", 400);
    }

    await updateEntryById({ ...entryDB, ...req.body });

    res.status(200).send({ status: "ok", message: "Entry updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = editEntry;
