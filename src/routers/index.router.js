import { Router } from "express";
import passengerRouter from "./passengers.router.js";
import citiesRouter from "./cities.router.js";
import flightsRouter from "./flights.router.js";

const router = Router();
router.use(passengerRouter);
router.use(citiesRouter);
router.use(flightsRouter);

export default router;
