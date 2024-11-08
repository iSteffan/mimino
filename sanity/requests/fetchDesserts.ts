import { client } from '../client';
import { dessertsQuery } from './queries/dessertsQuery';

export const fetchDesserts = async () => {
  const desserts = await client.fetch(dessertsQuery);
  return desserts;
};
