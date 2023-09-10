import httpStatus from "http-status";
import { cityService } from "../services/cities.service.js";

async function postCityName(req, res) {
  const { name } = req.body;
  await cityService.postCityName(name);
  res.sendStatus(httpStatus.CREATED);
}

export const citiesController = { postCityName };
