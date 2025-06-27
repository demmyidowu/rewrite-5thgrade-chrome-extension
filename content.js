// Create overlay for showing simplified text
function createOverlay(originalText, simplifiedText) {
  // Remove any existing overlay
  const existingOverlay = document.getElementById('simplify-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }

  const overlay = document.createElement('div');
  overlay.id = 'simplify-overlay';
  overlay.innerHTML = `
    <div class="simplify-content">
      <button class="simplify-close">×</button>
      <h3>Simplified Text</h3>
      <div class="simplify-text">${simplifiedText}</div>
      <details>
        <summary>Original Text</summary>
        <div class="original-text">${originalText}</div>
      </details>
    </div>
  `;

  document.body.appendChild(overlay);

  // Add close functionality
  overlay.querySelector('.simplify-close').addEventListener('click', () => {
    overlay.remove();
  });
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "simplifyText") {
    // Show loading indicator
    createOverlay(request.text, '<div class="loading">Simplifying text...</div>');
    
    // Call OpenAI through background script
    chrome.runtime.sendMessage({
      action: "callOpenAI",
      text: request.text,
      type: "simplify"
    }, response => {
      if (response.error) {
        createOverlay(request.text, `<div class="error">Error: ${response.error}</div>`);
      } else {
        createOverlay(request.text, response);
      }
    });
  }
});