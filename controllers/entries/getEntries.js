const { selectEntries } = require("../../repositories/entries");

const getEntries = async (req, res, next) => {
  try {
    const entries = await selectEntries();
    res.status(200).send({ status: "ok", data: entries });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntries;
