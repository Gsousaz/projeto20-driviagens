import JoiBase from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate);


export const flightsSchema = Joi.object({
  origin: Joi.number().required().messages({
    "number.base": `"Origem" é um campo do tipo number`,
    "any.required": `O campo "origem" é obrigatório`,
  }),
  destination: Joi.number().required().messages({
    "number.base": `"Destino" é um campo do tipo number`,
    "any.required": `O campo "destino" é obrigatório`,
  }),
  date: Joi.date().format("DD-MM-YYYY").required().messages({
    "date.base": `"data" deve ser informada no tipo "DD-MM-YYYY"`,
    "any.required": `O campo "data" é obrigatório`,
  }),
});

export const getFlightSchema = Joi.object({
  origin: Joi.string().messages({
    "string.base": `"Origem" é um campo do tipo texto`,
  }),
  destination: Joi.number().messages({
    "string.base": `"Destino" é um campo do tipo texto`,
  }),
  smallerDate: Joi.date().format("DD-MM-YYYY").messages({
    "date.base": `"data" deve ser informada no tipo "dd-mm-aaaa"`,
  }),
  biggerDate: Joi.date().format("DD-MM-YYYY").messages({
    "date.base": `"data" deve ser informada no tipo "dd-mm-aaaa"`,
  }),
});
