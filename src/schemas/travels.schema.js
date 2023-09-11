import Joi from "joi";

export const travelSchema = Joi.object({
  passengerId: Joi.number().required().messages({
    "number.base": `"passengerId" é um campo do tipo number`,
    "any.required": `O campo "passengerId" é obrigatório`,
  }),
  flightId: Joi.number().required().messages({
    "number.base": `"flightId" é um campo do tipo number`,
    "any.required": `O campo "flightId" é obrigatório`,
  }),
});
