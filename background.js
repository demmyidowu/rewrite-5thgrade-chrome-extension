// Create context menu item
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "simplifyText",
    title: "Simplify to 5th Grade Level",
    contexts: ["selection"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "simplifyText" && info.selectionText) {
    // Send message to content script
    chrome.tabs.sendMessage(tab.id, {
      action: "simplifyText",
      text: info.selectionText
    });
  }
});

// Handle API calls from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "callOpenAI") {
    callOpenAI(request.text, request.type)
      .then(sendResponse)
      .catch(error => sendResponse({ error: error.message }));
    return true; // Will respond asynchronously
  }
});

async function callOpenAI(text, type) {
  // Get API key from storage
  const { apiKey } = await chrome.storage.sync.get(['apiKey']);
  
  if (!apiKey) {
    throw new Error('Please set your OpenAI API key in the extension settings');
  }

  const prompts = {
    simplify: `Rewrite the following text at a 5th grade reading level. Keep the same meaning but use simpler words and shorter sentences:\n\n${text}`,
    summarize: `Provide a concise summary of the following text, highlighting the main points:\n\n${text}`
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: prompts[type]
      }],
      max_tokens: 500,
      temperature: 0.7
    })
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}