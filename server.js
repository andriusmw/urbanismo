//*************************** REQUIREMENTS **************************************************** */
//********************************************************************************************* */
require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload")
//requiere fileupload para subir imagenes

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
const {
  getEntry,
  getEntryByBarrio,
  editEntry,
  createEntry,
} = require("./controllers/entries");

const app = express();

app.use(fileUpload()); //middleware para gestionar ficheros

app.use(express.json());

/********************************** RUTAS ****************************************************** */
//********************************************************************************************** */

app.post("/users", registerUser); //registrar usuario
app.get("/users/activate/:registrationCode", activateUser); //activar usuario
app.post("/login", loginUser); //loguear usuario
app.post("/entries", validateAuth, createEntry);
app.patch("/entries/:idEntry", validateAuth, editEntry);  //actualizar datos entrada open close
app.delete("/users/:idUser", validateAuth, checkAdmin, deleteUser); //borrar usuarios
app.get("/entries", getEntry); //cargar entradas
app.get("/entries/:barrioID", getEntryByBarrio); //cargar entradas por barrioid

/********************************** middlewares de errores ************************************ */

/** Middleware 404 */
//app.use(notFound);

/** Middleware error */
/* app.use(handleError); */

/********************************** LEVANTAMOS EL SERVIDOR ************************************** */

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
