import { db } from "../database/database.conection.js";

async function createFlight(origin, destination, date) {
  await db.query(
    `INSERT INTO "flights" ("origin", "destination", "date") VALUES ($1, $2, $3)`,
    [origin, destination, date]
  );
}

async function returnFlights(origin, destination, smallerDate, biggerDate) {
  let queryText = `
      SELECT
          flights.id AS id,
          origem.name AS origin,
          destino.name AS destination,
          TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
      FROM flights
      JOIN cities AS origem ON flights.origin = origem.id
      JOIN cities AS destino ON flights.destination = destino.id
    `;

  const queryParams = [];

  if (origin) {
    queryText += ` WHERE origem.name = $1`;
    queryParams.push(origin);
  }

  if (destination) {
    if (origin) {
      queryText += ` AND destino.name = $2`;
    } else {
      queryText += ` WHERE destino.name = $1`;
    }
    queryParams.push(destination);
  }

  if (smallerDate && biggerDate) {
    if (origin || destination) {
      queryText += ` AND flights.date BETWEEN $${queryParams.length + 1} AND $${queryParams.length + 2}`;
    } else {
      queryText += ` WHERE flights.date BETWEEN $${queryParams.length + 1} AND $${queryParams.length + 2}`;
    }
    queryParams.push(smallerDate);
    queryParams.push(biggerDate);
  }

  console.log(queryParams)

  queryText += ` ORDER BY flights.date`;

  const queryResult = await db.query(queryText, queryParams);

  return queryResult.rows;
}

export const flightRepository = { createFlight, returnFlights };
