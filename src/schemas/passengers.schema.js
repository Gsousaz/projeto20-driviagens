import Joi from "joi";

export const passengerSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required().messages({
    "string.base": `"Primeiro nome" é um campo do tipo texto`,
    "string.min": `"Primeiro nome" deve ter no mínimo 2 caracteres `,
    "string.max": `"Primeiro nome" deve ter no máximo 100 caracteres `,
    "any.required": `O campo "Primeiro nome" é obrigatório`,
  }),
  lastName: Joi.string().min(2).max(100).required().messages({
    "string.base": `"Sobrenome" é um campo do tipo texto`,
    "string.min": `"Sobrenome" deve ter no mínimo 2 caracteres `,
    "string.max": `"Sobrenome" deve ter no máximo 100 caracteres `,
    "any.required": `O campo "Sobrenome" é obrigatório`,
  }),
});
