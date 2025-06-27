# Simplify Text - 5th Grade Level Chrome Extension

A Chrome extension that rewrites selected text to a 5th grade reading level using OpenAI's API, making complex content more accessible and easier to understand.

## Features

- **Text Simplification**: Converts complex text to 5th grade reading level
- **Context Menu Integration**: Right-click any selected text to simplify it
- **Overlay Display**: Shows simplified text in a clean modal overlay
- **Original Text Access**: View the original text alongside the simplified version
- **Secure API Key Storage**: Safely stores your OpenAI API key using Chrome's sync storage
- **Works Everywhere**: Functions on any website

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
5. The extension will appear in your toolbar

## Setup

1. Click the extension icon in your Chrome toolbar
2. Enter your OpenAI API key in the settings popup
3. Click "Save" to store your API key securely

### Getting an OpenAI API Key

1. Visit [OpenAI's website](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to the API keys section
4. Create a new API key
5. Copy the key and paste it into the extension settings

## Usage

1. Select any text on a webpage
2. Right-click on the selected text
3. Choose "Simplify to 5th Grade Level" from the context menu
4. Wait for the AI to process the text
5. View the simplified version in the overlay that appears
6. Click the arrow to expand and see the original text
7. Click the × button to close the overlay

## How It Works

The extension uses OpenAI's GPT-3.5-turbo model to rewrite text at a 5th grade reading level. It:

1. Captures selected text through the context menu
2. Sends the text to OpenAI with a specific prompt to simplify language
3. Returns the simplified version while preserving the original meaning
4. Displays both versions in an easy-to-read format

## Files Structure

- `manifest.json` - Extension configuration and permissions
- `background.js` - Service worker handling context menus and API calls
- `content.js` - Content script for displaying simplified text overlay
- `popup.html` - Settings popup interface
- `popup.js` - Settings popup functionality
- `styles.css` - Styling for the text overlay

## Privacy & Security

- Your API key is stored locally using Chrome's secure storage
- Text is only sent to OpenAI's API for processing
- No data is stored or tracked by the extension
- The extension only runs when you explicitly use it

## Requirements

- Chrome browser (Manifest V3 compatible)
- OpenAI API key with sufficient credits
- Internet connection for API calls

## Troubleshooting

**Extension won't load:**

- Make sure all files are in the same directory
- Check that Developer Mode is enabled in Chrome extensions

**API errors:**

- Verify your OpenAI API key is correct and has credits
- Check your internet connection
- Ensure you haven't exceeded OpenAI's rate limits

**Text won't simplify:**

- Make sure you've saved your API key in the extension settings
- Try selecting smaller amounts of text
- Check that the selected text contains actual content

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve this extension.
