//*************************** REQUIREMENTS **************************************************** */
//********************************************************************************************* */
require("dotenv").config();
const express = require("express");

const { SERVER_PORT } = process.env;
//Se trae la variable server_port del archivo env.

const {
  validateAuth,
  checkAdmin,
  //notFound,
  // handleError,
} = require("./middlewares");

const {
  registerUser,
  activateUser,
  loginUser,
  deleteUser,
} = require("./controllers/users");

const { getEntries } = require("./controllers/entries");
const getEntriesByBarrio = require("./controllers/entries/getEntriesByBarrio");

const app = express();

app.use(express.json());

/********************************** RUTAS ****************************************************** */
//********************************************************************************************** */

app.post("/users", registerUser); //registrar usuario
app.get("/users/activate/:registrationCode", activateUser); //activar usuario
app.post("/login", loginUser); //loguear usuario
/* app.post("/entries", validateAuth, createEntry);
app.patch("/entries/:idEntry", validateAuth, editEntry); */
app.delete("/users/:idUser", validateAuth, checkAdmin, deleteUser);
app.get("/entries", getEntries);
app.get("/entries", getEntriesByBarrio);

/********************************** middlewares de errores ************************************ */

/** Middleware 404 */
//app.use(notFound);

/** Middleware error */
/* app.use(handleError); */

/********************************** LEVANTAMOS EL SERVIDOR ************************************** */

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
