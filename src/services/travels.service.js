import { travelsRepository } from "../repositories/travels.repository.js";

async function postTravel(passengerId, flightId) {
  await travelsRepository.postTravel(passengerId, flightId);
}

export const travelsService = { postTravel };
