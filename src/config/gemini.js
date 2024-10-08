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
  temperature: 0.8, // Experiment with values between 0.7 and 1 for more creativity
  topP: 0.9, // A value of 0.9 to allow a wide range of choices
  topK: 100, // Consider a larger number of tokens for sampling
  maxOutputTokens: 200, // Increase to allow for longer responses (adjust as needed)
  responseMimeType: "text/plain",
};

function fileToGenerativePart(base64Image, mimeType) {
  return {
    inlineData: {
      data: base64Image.split(",")[1], // Extract base64 data without prefix
      mimeType,
    },
  };
}

export default async function runGemini(
  chatHistory,
  image = null,
  mimeType = null
) {
  let inputs = chatHistory.map((chat) => chat.message);

  // If there's an image, add it to the prompt
  if (image && mimeType) {
    const imagePart = fileToGenerativePart(image, mimeType);
    inputs.push(imagePart);
  }

  const result = await model.generateContent(inputs, generationConfig);
  return result.response.text();
}
