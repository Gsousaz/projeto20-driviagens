import { Router } from "express";
import passengerRouter from "./passengers.router.js";
import citiesRouter from "./cities.router.js";
import flightsRouter from "./flights.router.js";
import travelsRouter from "./travels.router.js";

const router = Router();
router.use(passengerRouter);
router.use(citiesRouter);
router.use(flightsRouter);
router.use(travelsRouter);

export default router;
