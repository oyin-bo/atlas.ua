// @ts-check

import { createInitialO } from './atlas/intro/initial-o';
import { subtitle } from './home/subtitle';
import { awaitAndLoadReadme } from './readme/await-and-load-readme';

atlasUA.codeLoaded = Date.now();
subtitle.textContent = 'обзор...';

awaitAndLoadReadme().then(() => {
  atlasUA.readmeLoaded = Date.now();
  subtitle.textContent = 'подивіться на літеру o';
  createInitialO();
});
