import { defineField } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const dishes = {
  name: 'dishes',
  title: 'Гарячі страви',
  type: 'document',
  description: 'Список гарячих страв',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва страви',
      description: 'Введіть назву страви',
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
      description: 'Введіть вагу страви',
      validation: rule => rule.required().error('Введіть вагу страви'),
    }),
    defineField({
      name: 'price',
      title: 'Ціна',
      type: 'string',
      description: 'Введіть ціну страви',
      validation: rule => rule.required().error('Введіть ціну страви'),
    }),

    orderRankField({ type: 'dishes' }),
  ],
  orderings: [orderRankOrdering],
};

export default dishes;
