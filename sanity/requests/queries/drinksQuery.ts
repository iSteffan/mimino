import { groq } from 'next-sanity';

export const drinksQuery = groq`*[_type == "drinks"]|order(orderRank){
    name,
    weight,
    price
  }`;
