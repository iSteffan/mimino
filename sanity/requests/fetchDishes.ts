import { client } from '../client';
import { dishesQuery } from './queries/dishesQuery';

export const fetchDishes = async () => {
  const dishes = await client.fetch(dishesQuery);
  return dishes;
};
