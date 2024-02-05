/** @type {string | Promise<string>} */
export let readmeContent = new Promise(resolve => {
  window.md = md;

  function md(fn) {
    const txt = fn + '';
    const startPos = txt.indexOf('\n');
    const endPos = txt.lastIndexOf('<', startPos + 1);

    const stripped = txt.slice(startPos, endPos).trim();

    readmeContent = stripped;
    resolve(stripped);
  }
});
