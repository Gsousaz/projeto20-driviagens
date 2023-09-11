import { db } from "../database/database.conection.js";

async function createPassenger(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`,
    [firstName, lastName]
  );
}

async function showPassengersTravelsNumber(queryName) {
  let sql = `
      SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger,
             COUNT(travels."passengerId") AS travels
      FROM passengers
      LEFT JOIN travels ON passengers.id = travels."passengerId"
    `;

  const queryParams = [];

  if (queryName) {
    sql +=
      ' WHERE passengers."firstName" || \' \' || passengers."lastName" ILIKE $1';
    queryParams.push(`%${queryName}%`);
  }

  sql += `
      GROUP BY passengers."firstName", passengers."lastName"
      ORDER BY travels DESC
    `;

  sql += " LIMIT 10";

  const { rows } = await db.query(
    queryName
      ? sql
      : sql.replace(
          'WHERE passengers."firstName" || \' \' || passengers."lastName" ILIKE $1',
          ""
        )
  );
        console.log(rows)
  return rows;
  
}

export const passengerRepository = {
  createPassenger,
  showPassengersTravelsNumber,
};
