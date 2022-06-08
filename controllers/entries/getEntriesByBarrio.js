const { selectEntriesByBarrio } = require("../../repositories/entries");

const getEntriesByBarrio = async (req, res, next) => {
  try {
    const entries = await selectEntriesByBarrio();
    res.status(200).send({ status: "ok", data: entries });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntriesByBarrio;
