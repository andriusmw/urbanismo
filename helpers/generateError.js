//------- MKDIR CON FS PARA UPLOADS-----------
//Lo pongo aquí en vez de crear un archivo nuevo porque este ya va
//incorporado en todas las funciones que lo necesita, así no hay que llamarlo
//tantas veces.

const fs = require("fs/promises")

const createPathIfNotExists = async (path) => {
  try {
    await fs.access(path);
    //intentar ir a la ruta
  } catch {
    await fs.mkdir(path);
    //sino lo consigue la crea.
  }
}


//--------------------------------------------

const generateError = (message, status) => {
    const error = new Error(message);
    error.statusCode = status;
    throw error;
  };
  
  module.exports = generateError, createPathIfNotExists;
  