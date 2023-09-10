import { db } from "../database/database.conection.js";

async function createFlight(origin, destination, date) {
  await db.query(
    `INSERT INTO "flights" ("origin", "destination", "date") VALUES ($1, $2, $3)`,
    [origin, destination, date]
  );
}

export const flightRepository = { createFlight };
