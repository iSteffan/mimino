import { groq } from 'next-sanity';

export const dishesQuery = groq`*[_type == "dishes"]|order(orderRank){
    name,
    ingredient,
    weight,
    price
  }`;
