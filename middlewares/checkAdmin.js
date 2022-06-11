const { generateError } = require("../helpers/generateError");


const checkAdmin = async (req, res, next) => {
  
console.log(req.auth.role)
  try {
    if (req.auth.role !== "admin") {
      generateError("You must be an admin to delete an user", 400);
      res.status(400).send({ status: "error", data: { token } });
      next(error);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkAdmin;
