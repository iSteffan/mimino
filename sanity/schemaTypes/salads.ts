import { defineField } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const salads = {
  name: 'salads',
  title: 'Салати',
  type: 'document',
  description: 'Список салатів',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва салату',
      description: 'Введіть назву салату',
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
      description: 'Введіть вагу салату',
      validation: rule => rule.required().error('Введіть вагу салату'),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'string',
      description: 'Введіть ціну салату',
      validation: rule => rule.required().error('Введіть ціну салату'),
    }),

    orderRankField({ type: 'salads' }),
  ],
  orderings: [orderRankOrdering],
};

export default salads;
