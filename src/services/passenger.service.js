import { passengerRepository } from "../repositories/passenger.repository.js";

async function createPassenger(firstName, lastName) {
  await passengerRepository.createPassenger(firstName, lastName);
}

async function showPassengersTravelsNumber(req, res) {}

export const passengerService = {
  createPassenger,
  showPassengersTravelsNumber,
};
