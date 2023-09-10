import Joi from "joi";

export const citiesSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.base": `"Cidade" é um campo do tipo texto`,
    "string.min": `"Cidade" deve ter no mínimo 2 caracteres `,
    "string.max": `"Cidade" deve ter no máximo 50 caracteres `,
    "any.required": `O campo "cidade" é obrigatório`,
  }),
});
