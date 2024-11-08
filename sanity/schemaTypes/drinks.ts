import { defineField } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const drinks = {
  name: 'drinks',
  title: 'Напої ',
  type: 'document',
  description: 'Список напоїв',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва напою',
      description: 'Введіть назву напою',
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
      description: 'Введіть вагу напою',
      validation: rule => rule.required().error('Введіть вагу напою'),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'string',
      description: 'Введіть ціну напою',
      validation: rule => rule.required().error('Введіть ціну напою'),
    }),

    orderRankField({ type: 'drinks' }),
  ],
  orderings: [orderRankOrdering],
};

export default drinks;
