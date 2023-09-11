import httpStatus from "http-status";
import { travelsService } from "../services/travels.service.js";

async function postTravel(req, res) {
  const { passengerId, flightId } = req.body;
  await travelsService.postTravel(passengerId, flightId);
  res.sendStatus(httpStatus.CREATED);
}

export const travelsController = { postTravel };
