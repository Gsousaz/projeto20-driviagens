import httpStatus from "http-status";
import { flightService } from "../services/flights.service.js";

async function createFlight(req, res) {
  const { origin, destination, date } = req.body;
  await flightService.createFlight(origin, destination, date);
  res.sendStatus(httpStatus.CREATED);
}

export const flightsController = { createFlight };
