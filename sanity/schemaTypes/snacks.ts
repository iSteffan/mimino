import { defineField } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const snacks = {
  name: 'snacks',
  title: 'Гарніри та закуски',
  type: 'document',
  description: 'Список гарніру чи закуски',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва гарніру чи закуски',
      description: 'Введіть назву гарніру чи закуски',
      type: 'string',
      validation: rule =>
        rule
          .required()
          .error("Назва є обов'язковим полем")
          .max(40)
          .error('Введіть назву, яка містить не більше 40 символів'),
    }),
    defineField({
      name: 'ingredient',
      title: 'Інгредієнти',
      description: 'Введіть інгредієнти',
      type: 'string',

      validation: rule =>
        rule
          .required()
          .error("Iнгредієнти є обов'язковим полем")
          .max(95)
          .error('Введіть iнгредієнти, якi містять не більше 75 символів'),
    }),

    defineField({
      name: 'weight',
      title: 'Вага',
      type: 'string',
      description: 'Введіть вагу гарніру чи закуски',
      validation: rule => rule.required().error('Введіть вагу гарніру чи закуски'),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'string',
      description: 'Введіть ціну гарніру чи закуски',
      validation: rule => rule.required().error('Введіть ціну гарніру чи закуски'),
    }),

    orderRankField({ type: 'snacks' }),
  ],
  orderings: [orderRankOrdering],
};

export default snacks;
