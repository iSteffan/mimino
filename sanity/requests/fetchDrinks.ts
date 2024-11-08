import { client } from '../client';
import { drinksQuery } from './queries/drinksQuery';

export const fetchDrinks = async () => {
  const drinks = await client.fetch(drinksQuery);
  return drinks;
};
