import { Router } from "express";
import passengerRouter from "./passengers.router.js";

const router = Router();
router.use(passengerRouter);

export default router;
