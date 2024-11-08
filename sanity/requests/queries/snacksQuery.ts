import { groq } from 'next-sanity';

export const snacksQuery = groq`*[_type == "snacks"]|order(orderRank){
    name,
    ingredient,
    weight,
    price
  }`;
