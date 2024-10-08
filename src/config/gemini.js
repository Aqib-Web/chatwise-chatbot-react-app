/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  //   HarmCategory,
  //   HarmBlockThreshold,
} from "@google/generative-ai";

console.log("Ok");

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  //   model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// async function runGemini(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     // safetySettings: Adjust safety settings
//     // See https://ai.google.dev/gemini-api/docs/safety-settings
//     history: [],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   console.log(result.response.text());
//   return result.response.text();
// }


async function runGemini(history) {
  const chatSession = model.startChat({
    history: history.map((entry) => ({
      role: entry.role,
      parts: [{ text: entry.message }],
    })),
  });

  const result = await chatSession.sendMessage(history[history.length - 1].message);
  console.log(result.response.text());
  
  return result.response.text();
}

export default runGemini;
