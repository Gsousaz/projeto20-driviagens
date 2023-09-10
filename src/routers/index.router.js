import { Router } from "express";
import passengerRouter from "./passengers.router.js";
import citiesRouter from "./cities.router.js";

const router = Router();
router.use(passengerRouter);
router.use(citiesRouter);

export default router;
