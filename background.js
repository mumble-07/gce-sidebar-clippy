chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ clipboard: [] });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copy") {
    chrome.storage.local.get("clipboard", (data) => {
      const clipboard = data.clipboard || [];
      clipboard.push(request.text);
      chrome.storage.local.set({ clipboard: clipboard });
    });
  }
});
