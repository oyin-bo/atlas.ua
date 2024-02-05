// @ts-check

import { marked } from 'marked';
import { readmeContent } from './readme-content';
import { page2Host } from './page2-host';

export async function awaitAndLoadReadme() {
  const readmeMD = await readmeContent;
  const readmeHTML = await marked(readmeMD);
  const readmeElement = page2Host;

  readmeElement.innerHTML = readmeHTML;
}