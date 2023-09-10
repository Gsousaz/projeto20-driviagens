import httpStatus from "http-status";
import { passengerService } from "../services/passenger.service.js";

async function createPassenger(req, res) {
  const { firstName, lastName } = req.body;
  await passengerService.createPassenger(firstName, lastName);
  res.sendStatus(httpStatus.CREATED);
}

async function showPassengersTravelsNumber(req, res) {}

export const passengerController = {
  createPassenger,
  showPassengersTravelsNumber,
};
