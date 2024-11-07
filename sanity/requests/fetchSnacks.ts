import { client } from '../client';
import { snacksQuery } from './queries/snacksQuery';

export const fetchSnacks = async () => {
  const snacks = await client.fetch(snacksQuery);
  return snacks;
};
