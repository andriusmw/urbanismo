const {
  selectEntryById,
  updateEntryById,
} = require("../../repositories/entries");
const { generateError } = require("../../helpers/generateError");

const editEntry = async (req, res, next) => {
  try {
    const { idEntry } = req.params;

    const entryDB = await selectEntryById(idEntry);

    if (!entryDB) {
      throw generateError("Entry does not exist", 404);
    }

    const userRole = req.auth.role; //De dónde viene .auth.id?

    if (userRole !== "admin") {
      throw generateError("Only admin users can edit entries", 400);
    }
    await updateEntryById({ ...entryDB, ...req.body });

    res.status(200).send({ status: "ok", message: "Entry updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = editEntry;
