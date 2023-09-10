import { Router } from "express";
import { citiesController } from "../controllers/cities.controller.js";
import { schemaValidation } from "../middlewares/schema.validation.js";
import { citiesSchema } from "../schemas/citiesSchema.js";

const citiesRouter = Router();
citiesRouter.post(
  "/cities",
  schemaValidation(citiesSchema),
  citiesController.postCityName
);

export default citiesRouter;
