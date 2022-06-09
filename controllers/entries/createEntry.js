const { insertEntry } = require("../../repositories/entries");

const createEntry = async (req, res, next) => {
  try {
    // const { id: userId } = req.auth;

    const userId = req.auth.id;
    //requiere una id de usuario para ver que está logueado

    const { title, description, photo, city, neighborhood, status } = req.body;
    //recogemos del body los parametros

    const insertId = await insertEntry({ title, description, photo, city, neighborhood, status, userId });
    //pasamos los paramretros a inserentry y lo guardamos en la constante insertId

    res.status(201).send({
      status: "ok",
      data: { entry: insertId },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createEntry;
