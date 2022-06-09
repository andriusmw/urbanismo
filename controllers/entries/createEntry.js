const { insertEntry } = require("../../repositories/entries");

const createEntry = async (req, res, next) => {
  try {
    // const { id: userId } = req.auth;

    const userId = req.auth.id;

    const { title, description } = req.body;

    const insertId = await insertEntry({ title, description, userId });

    res.status(201).send({
      status: "ok",
      data: { id: insertId, title, description, userId },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createEntry;
