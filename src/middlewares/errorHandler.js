import httpStatus from "http-status";

export function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.type === "joiError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "duplicity") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "dateError") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.code === "23505" && error.constraint === "cities_name_key") {
    return res.status(httpStatus.CONFLICT).send("Esta cidade já foi adicionada");
  }

  if (error.code === "23503" && error.constraint === "flights_origin_fkey") {
    return res.status(httpStatus.NOT_FOUND).send("Cidade de origem não encontrada");
  }

  if (
    error.code === "23503" && error.constraint === "flights_destination_fkey") {
    return res.status(httpStatus.NOT_FOUND).send("Cidade de destino não encontrada");
  }

  if (
    error.code === "23503" && error.constraint === "travels_passengerId_fkey") {
    return res.status(httpStatus.NOT_FOUND).send("Passageiro não encontrado");
  }

  if (
    error.code === "23503" && error.constraint === "travels_flightId_fkey") {
    return res.status(httpStatus.NOT_FOUND).send("Voo não encontrado");
  }

  if (error.type === "dateError") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send("Ocorreu um erro :(");
}
