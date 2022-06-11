const Joi = require("joi");
const { generateError } = require("../../helpers/generateError");

const newEntrySchema = Joi.object({
  title: Joi.string()
    .min(4)
    .max(100)
    .required()
    .error(
      generateError(
        "Title is required and must have between 4 and 100 characters",
        400
      )
    ),
  description: Joi.string()
    .min(4)
    .max(500)
    .required()
    .error(
      generateError(
        "Description is required and must have between 4 and 500 characters",
        400
      )
    ),
        //No validamos la imagen porque es un campo opcional.
        city: Joi.string()
        .min(4)
        .max(100)
        .required()
        .error(
          generateError(
            "City is required and must have between 4 and 100 characters",
            400
          )
        ),  

        neighborhood: Joi.string()
        .min(4)
        .max(100)
        .required()
        .error(
          generateError(
            "City is required and must have between 4 and 100 characters",
            400
          )
        ), 

        status: Joi.string()
        .min(4)
        .max(6)
        .error(
          generateError(
            "STATUS field is not valid",
            400
          )
        ),
        
        user_id: Joi.string()
        
       
        .required()
        .error(
          generateError(
            "It must to have an user_id",
            400
          )
        ), 


});

module.exports = newEntrySchema;
