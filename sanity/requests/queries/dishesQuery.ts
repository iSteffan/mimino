import { groq } from 'next-sanity';

export const dishesQuery = groq`*[_type == "dishes"]{
    name,
    position,
    weight,
    price
  }`;
