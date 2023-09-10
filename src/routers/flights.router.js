import { Router } from "express";
import { flightsController } from "../controllers/flights.controller.js";

const flightsRouter = Router();
flightsRouter.post("/flights", flightsController.createFlight);
flightsRouter.get("/flights");

export default flightsRouter;
