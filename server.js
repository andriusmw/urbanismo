//*************************** REQUIREMENTS **************************************************** */
//********************************************************************************************* */
require("dotenv").config();
const express = require("express");

const { SERVER_PORT } = process.env;
//Se trae la variable server_port del archivo env.

const app = express();

app.use(express.json());



/********************************** middlewares de errores ************************************ */

/** Middleware 404 */
//app.use(notFound);

/** Middleware error */
//app.use(handleError);

/********************************** LEVANTAMOS EL SERVIDOR ************************************** */

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
