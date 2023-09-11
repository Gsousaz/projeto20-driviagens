import { passengerRepository } from "../repositories/passenger.repository.js";

async function createPassenger(firstName, lastName) {
  await passengerRepository.createPassenger(firstName, lastName);
}

async function showPassengersTravelsNumber(queryName) {
  const result = await passengerRepository.showPassengersTravelsNumber(
    queryName
  );
  return result;
}

export const passengerService = {
  createPassenger,
  showPassengersTravelsNumber,
};
