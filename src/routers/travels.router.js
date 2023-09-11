import { Router } from "express";
import { travelsController } from "../controllers/travels.controller.js";
import { schemaValidation } from "../middlewares/schema.validation.js";
import { travelSchema } from "../schemas/travels.schema.js";

const travelsRouter = Router();
travelsRouter.post("/travels", schemaValidation(travelSchema), travelsController.postTravel);

export default travelsRouter;
