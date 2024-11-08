import { groq } from 'next-sanity';

export const saladsQuery = groq`*[_type == "salads"]|order(orderRank){
    name,
    ingredient,
    weight,
    price
  }`;
