'use strict';

// Observe added elements for scripts to replace values.
const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.matches('script')) {
          node.innerHTML = node.innerHTML.replace(/(?<=var (currentWeek|totalWeeks) *= *)[0-9]+/g, '12');
        }
      }
    }
  }
});

// Begin observation.
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

// End observation once page has finished loading.
window.addEventListener('DOMContentLoaded', _ => {
  observer.disconnect();
});

