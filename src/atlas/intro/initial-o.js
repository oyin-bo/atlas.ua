// @ts-check

export function createInitialO() {
  const page1 = /** @type {HTMLElement} */(document.querySelector('.page1'));

  visualViewport?.addEventListener('resize', handleResize);
  visualViewport?.addEventListener('scroll', handleResize);
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleResize);

  const oElement = document.createElement('pre');
  oElement.style.cssText =
    `position: absolute;
      margin: 0; padding: 0;
      font: inherit;
      top: 10em; left: 10em;
      min-width: 2em; min-height: 2em;
      border: solid 2px gold;
      color: white;
      1px 1px 3px black, 0px 0px 9px black
      border-radius: 0.2em;
      padding: 0.3em;`;
  document.body.appendChild(oElement)

  setTimeout(resizeDebouncedWithAnimationFrame, 1);

  function handleResize() {
    requestAnimationFrame(resizeDebouncedWithAnimationFrame);
  }

  function resizeDebouncedWithAnimationFrame() {
    if (!visualViewport) return;

    const pos = calcO();

    const msg =
      'xy ' + visualViewport.pageLeft + ':' + visualViewport.offsetLeft + ' x ' + visualViewport.pageTop + ':' + visualViewport.offsetTop + ' \n' +
      'sz ' + visualViewport.width + ' x ' + visualViewport.height + ' \n' +
      '*' + visualViewport.scale + '\n\n' +
      'ratio: ' + pos.width / pos.height + '\n' +
      JSON.stringify(pos, null, 2);

    oElement.onclick = () => {
      alert(msg);
    };

    oElement.style.left = pos.left + 'px';
    oElement.style.top = pos.top + 'px';
    oElement.style.width = pos.width + 'px';
    oElement.style.height = pos.height + 'px';
  }

  function calcO() {
    const bgWidth = 3840;
    const bgHeight = 2847;
    const page1Bounds = page1.getBoundingClientRect();
    const wWidth = page1Bounds.width;
      // visualViewport ?
      //   visualViewport.width * visualViewport.scale :
      //   document.documentElement.clientWidth // window.innerWidth;
    const wHeight = page1Bounds.height;
      // (visualViewport ?
      //   visualViewport.height * visualViewport.scale :
      //   window.innerHeight)
      // * 0.9; // page1 height is clamped at 90% of window height

    const scale = wWidth / wHeight > bgWidth / bgHeight ?
      wWidth / bgWidth : // window so wide
      wHeight / bgHeight; // window so tall

    return {
      bgScale: scale,
      left: 609 * scale,
      top: 1068 * scale,
      width: 116 * scale,
      height: 210 * scale
    };
  }
}