import { Router } from "express";
import { passengerController } from "../controllers/passengers.controller.js";
import { schemaValidation } from "../middlewares/schema.validation.js";
import { passengerSchema } from "../schemas/passengers.schema.js";

const passengerRouter = Router();
passengerRouter.post("/passengers", schemaValidation(passengerSchema), passengerController.createPassenger);
passengerRouter.get("/passengers/travels", passengerController.showPassengersTravelsNumber);

export default passengerRouter;
