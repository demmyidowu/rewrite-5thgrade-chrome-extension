// Load saved API key
chrome.storage.sync.get(['apiKey'], (result) => {
  if (result.apiKey) {
    document.getElementById('apiKey').value = result.apiKey;
  }
});

// Save API key
document.getElementById('saveKey').addEventListener('click', () => {
  const apiKey = document.getElementById('apiKey').value;
  chrome.storage.sync.set({ apiKey }, () => {
    const status = document.getElementById('status');
    status.textContent = 'API key saved!';
    status.style.color = 'green';
    setTimeout(() => {
      status.textContent = '';
    }, 2000);
  });
});