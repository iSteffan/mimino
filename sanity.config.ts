import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

import schemas from './sanity/schemaTypes';
import { projectId, dataset, apiVersion } from '@/sanity/env';

export default defineConfig({
  name: 'default',
  title: 'Mimino',

  projectId,
  dataset,
  apiVersion,

  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: schemas,
  },
  desk: {
    structure: S =>
      S.list()
        .title('Контент')
        .items([
          orderableDocumentListDeskItem({
            type: 'dishes',
            title: 'Гарячі страви',
          }),
          orderableDocumentListDeskItem({
            type: 'snacks',
            title: 'Гарніри та закуски',
          }),
        ]),
  },
});
