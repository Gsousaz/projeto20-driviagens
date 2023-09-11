import { Router } from "express";
import { flightsController } from "../controllers/flights.controller.js";
import { schemaValidation } from "../middlewares/schema.validation.js";
import { flightsSchema, getFlightSchema } from "../schemas/flights.schema.js";

const flightsRouter = Router();
flightsRouter.post(
  "/flights",
  schemaValidation(flightsSchema),
  flightsController.createFlight
);
flightsRouter.get(
  "/flights",
  schemaValidation(getFlightSchema),
  flightsController.returnFlights
);

export default flightsRouter;
