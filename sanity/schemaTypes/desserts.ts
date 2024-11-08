import { defineField } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const desserts = {
  name: 'desserts',
  title: 'Десерти ',
  type: 'document',
  description: 'Список десертів',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва десерту',
      description: 'Введіть назву десерту',
      type: 'string',
      validation: rule =>
        rule
          .required()
          .error("Назва є обов'язковим полем")
          .max(40)
          .error('Введіть назву, яка містить не більше 40 символів'),
    }),
    defineField({
      name: 'weight',
      title: 'Вага',
      type: 'string',
      description: 'Введіть вагу десерту',
      validation: rule => rule.required().error('Введіть вагу десерту'),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'string',
      description: 'Введіть ціну десерту',
      validation: rule => rule.required().error('Введіть ціну десерту'),
    }),

    orderRankField({ type: 'desserts' }),
  ],
  orderings: [orderRankOrdering],
};

export default desserts;
