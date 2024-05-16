import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Mimino',

  projectId: 'h84a8gc8',
  dataset: 'production',

  apiVersion: '2024-05-16',
  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: schemas,
  },
});
