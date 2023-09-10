import { cityRepository } from "../repositories/cities.repository.js";

async function postCityName(name) {
  await cityRepository.postCityName(name);
}

export const cityService = {
  postCityName,
};
