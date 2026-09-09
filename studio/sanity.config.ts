import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import post from './schemas/post';
import config from '../sanity.json';

export default defineConfig({
  name: 'coachingthechange',
  title: 'Coaching The Change',
  projectId: config.projectId,
  dataset: config.dataset,
  plugins: [structureTool()],
  schema: { types: [post] },
});
