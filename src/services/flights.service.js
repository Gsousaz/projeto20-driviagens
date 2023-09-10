import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { flightRepository } from "../repositories/flights.repository.js";

async function createFlight(origin, destination, date) {
  if (origin === destination) {
    throw errors.duplicityError();
  }

  if (dayjs(date, "DD-MM-YYYY").isBefore(dayjs(), "DD-MM-YYYY")) {
    throw errors.pastDateError();
  }

  await flightRepository.createFlight(origin, destination, date);
}

export const flightService = { createFlight };
