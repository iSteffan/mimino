import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
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
});
