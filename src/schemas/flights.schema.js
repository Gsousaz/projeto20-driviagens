import Joi from "joi";
import joiDate from "@joi/date";

export const flightsSchema = Joi.object({
  origin: Joi.number().required().messages({
    "number.base": `"Origem" é um campo do tipo number`,
    "any.required": `O campo "origem" é obrigatório`,
  }),
  destination: Joi.number().required().messages({
    "number.base": `"Origem" é um campo do tipo number`,
    "any.required": `O campo "origem" é obrigatório`,
  }),
  date: Joi.date().format("dd-mm-aaaa").required.messages({
    "date.base": `"data" deve ser informada no tipo "dd-mm-aaaa"`,
    "any.required": `O campo "origem" é obrigatório`,
  }),
});
