import { defineCliConfig } from 'sanity/cli';
import config from '../sanity.json';

export default defineCliConfig({
  api: { projectId: config.projectId, dataset: config.dataset },
  // ponytail: hosted at <studioHost>.sanity.studio — Sanity hosts it free, nothing for us to deploy
  studioHost: 'coachingthechange',
});
