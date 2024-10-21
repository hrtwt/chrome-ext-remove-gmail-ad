new MutationObserver(() => {
  document.querySelectorAll<HTMLTableRowElement>(
    'tr:has(> td[data-tooltip="選択"][style*="visibility: hidden"])',
  ).forEach((e) => {
    e.style.visibility = "hidden";
  });
}).observe(document.body, { childList: true, subtree: true });
