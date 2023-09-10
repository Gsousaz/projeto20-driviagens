import { db } from "../database/database.conection.js";

async function postCityName(name) {
  await db.query(`INSERT INTO "cities" (name) VALUES ($1)`, [name]);
}

export const cityRepository = {
  postCityName,
};
