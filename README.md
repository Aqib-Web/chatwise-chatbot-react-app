# ChatWise AI Chat App with Google Gemini API

Welcome to the **ChatWise** built with React, ShadCN UI, Vite, and the Google Gemini API. This app provides an interactive chat experience, allowing users to engage in multiple rounds of questions and responses. It also supports both text and image input for a rich, multimedia interaction. Whether you're working through complex problems or seeking general assistance, this app helps guide you step-by-step toward your solution.

## Features

- **Interactive Conversations:** Users can have multi-turn conversations with the AI, where each round of questions and answers helps refine the user's inquiry and brings them closer to a solution.
- **Text & Image Input:** Users can input both text and images to interact with the AI. The AI can process and respond to both types of input.
- **Powered by Google Gemini API:** The backend utilizes the Google Gemini API to generate responses, providing high-quality and contextually-aware replies.
- **Fast Development with Vite:** Built using Vite, offering a fast and optimized development experience.

## Demo

[**Live Demo**](https://chatwise-chatbot-react-app-phi.vercel.app/)

## Tech Stack

- **Frontend:** 
  - React
  - ShadCN UI (for modern, customizable UI components)
  - Vite (for fast build and development process)

- **Backend:**
  - Google Gemini API (for AI-generated responses)

- **Image Processing:** Supports image input from users and processing by Google Gemini API.

## Installation

To set up the app locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-chat-app.git
cd ai-chat-app
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

```bash
npm install
```

### 3. Set up API keys
You will need a valid API key for the Google Gemini API.

Obtain your Google Gemini API key from the Google Cloud Console.
Create a .env file in the root directory of the project and add the following:
```bash
VITE_GOOGLE_API_KEY=your-google-gemini-api-key
```

### 4. Start the development server
```bash
npm run dev
```
The app should now be running locally at http://localhost:5173

