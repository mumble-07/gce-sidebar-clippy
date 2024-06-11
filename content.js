document.addEventListener('copy', (event) => {
  const selection = document.getSelection().toString();
  if (selection) {
    chrome.runtime.sendMessage({ action: "copy", text: selection });
  }
});
