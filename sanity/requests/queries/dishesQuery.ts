import { groq } from 'next-sanity';

export const dishesQuery = groq`*[_type == "dishes"]{
    name,
    ingredient,
    weight,
    price
  }`;
