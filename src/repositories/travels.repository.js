import { db } from "../database/database.conection.js";

async function postTravel(passengerId, flightId) {
  await db.query(
    `INSERT INTO "travels" ("passengerId", "flightId") VALUES ($1, $2)`,
    [passengerId, flightId]
  );
}

export const travelsRepository = { postTravel };
