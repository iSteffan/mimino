import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {
  orderableDocumentListDeskItem,
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

import schemas from './sanity/schemaTypes';
import { projectId, dataset, apiVersion } from '@/sanity/env';

export default defineConfig({
  name: 'default',
  title: 'Mimino',

  projectId,
  dataset,
  apiVersion,

  basePath: '/admin',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Контент')
          .items([
            orderableDocumentListDeskItem({
              type: 'dishes',
              title: 'Гарячі страви',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'snacks',
              title: 'Гарніри та закуски',
              S,
              context,
            }),
          ]);
      },
    }),
  ],
  schema: {
    types: schemas,
  },
});
