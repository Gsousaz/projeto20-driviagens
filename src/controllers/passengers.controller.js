import httpStatus from "http-status";
import { passengerService } from "../services/passenger.service.js";

async function createPassenger(req, res) {
  const { firstName, lastName } = req.body;
  await passengerService.createPassenger(firstName, lastName);
  res.sendStatus(httpStatus.CREATED);
}

async function showPassengersTravelsNumber(req, res) {
  const { name } = req.query;
  const result = await passengerService.showPassengersTravelsNumber(name);
  res.status(httpStatus.OK).send(result);
}

export const passengerController = {
  createPassenger,
  showPassengersTravelsNumber,
};
