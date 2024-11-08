import { groq } from 'next-sanity';

export const dessertsQuery = groq`*[_type == "desserts"]|order(orderRank){
    name,
    weight,
    price
  }`;
