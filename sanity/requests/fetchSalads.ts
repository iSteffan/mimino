import { client } from '../client';
import { saladsQuery } from './queries/saladsQuery';

export const fetchSalads = async () => {
  const salads = await client.fetch(saladsQuery);
  return salads;
};
