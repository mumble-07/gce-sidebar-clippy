document.addEventListener('DOMContentLoaded', () => {
  console.log(chrome.storage); // Should log the storage API
  const collapsible = document.querySelector('.collapsible');
  const content = document.querySelector('.content');
  const clipboardDiv = document.getElementById('clipboard');
  const clearButton = document.getElementById('clear');

  collapsible.addEventListener('click', () => {
    collapsible.classList.toggle('active');
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

  const loadClipboard = () => {
    chrome.storage.local.get('clipboard', (data) => {
      const clipboard = data.clipboard || [];
      console.log('Loaded clipboard:', clipboard); // Log loaded clipboard
      clipboardDiv.innerHTML = clipboard.map(item => `<div class="clipboard-item">${item}</div>`).join('');
    });
  };
  

  clearButton.addEventListener('click', () => {
    chrome.storage.local.set({ clipboard: [] }, loadClipboard);
  });

  loadClipboard();
});
