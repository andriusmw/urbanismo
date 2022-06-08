const { selectEntryByBarrio } = require("../../repositories/entries");

const getEntryByBarrio = async (req, res, next) => {
  try {
    const { barrioID } = req.params;
    const entries = await selectEntryByBarrio();
    res.status(200).send({ status: "ok", data: entries, barrioID: barrioID });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntryByBarrio;
