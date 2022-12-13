/* Utility bookmarklets to modify pages and change the look of websites */

// Make website editable
javascript:document.body.contentEditable = true; void 0;

// Disable editing
javascript:document.body.contentEditable = false; void 0;

// X-ray goggles (kind of like an inspect-edit-make temporary changes thingy)
javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())
