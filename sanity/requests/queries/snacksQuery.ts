import { groq } from 'next-sanity';

export const snacksQuery = groq`*[_type == "snacks"]{
    name,
    ingredient,
    weight,
    price
  }`;
