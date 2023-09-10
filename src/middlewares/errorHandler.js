import httpStatus from "http-status";

export function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.type === "joiError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.code === "23505" && error.constraint === "cities_name_key") {
    return res
      .status(httpStatus.CONFLICT)
      .send("Esta cidade já foi adicionada");
  }

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send("Ocorreu um erro :(");
}
