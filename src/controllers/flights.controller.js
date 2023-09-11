import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";

async function createFlight(req, res) {
  const { origin, destination, date } = req.body;
  await flightsService.createFlight(origin, destination, date);
  res.sendStatus(httpStatus.CREATED);
}

async function returnFlights(req, res) {
  const { origin, destination } = req.query;
  const smallerDate = req.query["smaller-date"];
  const biggerDate = req.query["bigger-date"];

  const flights = await flightsService.returnFlights(
    origin,
    destination,
    biggerDate,
    smallerDate
  );
  res.status(httpStatus.OK).send(flights);
}

export const flightsController = { createFlight, returnFlights };
