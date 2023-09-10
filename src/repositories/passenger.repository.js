import { db } from "../database/database.conection.js";

async function createPassenger(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`,
    [firstName, lastName]
  );
}

async function showPassengersTravelsNumber() {}

export const passengerRepository = {
  createPassenger,
  showPassengersTravelsNumber,
};
