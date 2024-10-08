import { createContext, useState } from "react";
import runGemini from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Holds current chat session
  const [allChats, setAllChats] = useState([]); // Holds all previous chat sessions
  const [uploadedImage, setUploadedImage] = useState(null); // Stores the uploaded image
  const [mimeType, setMimeType] = useState(""); // Stores the image's MIME type

  // Save the current chat session and reset for a new chat
  const saveChatSession = () => {
    if (chatHistory.length > 0) {
      setAllChats((prevChats) => [...prevChats, chatHistory]); // Save the current session
      setChatHistory([]); // Clear current chat history for a new session
    }
  };

  const newChat = () => {
    saveChatSession(); // Save the last session before starting a new one
    setInput("");
    setLoading(false);
    setUploadedImage(null); // Clear image when starting new chat
    setMimeType("");
  };

  const onSent = async (prompt) => {
    setLoading(true);

    // Create a new chat object to store both text and image if provided
    const userMessage = { role: "user", message: prompt };

    if (uploadedImage) {
      userMessage.image = uploadedImage; // Add the image to the chat if it's available
      userMessage.mimeType = mimeType; // Include MIME type for the image
    }

    // Update chat history with the user's input (both text and image if applicable)
    const updatedHistory = [...chatHistory, userMessage];
    setChatHistory(updatedHistory);

    // Send message to Gemini, along with image (if present)
    const response = await runGemini(updatedHistory, uploadedImage, mimeType);

    // Add Gemini's response to the chat history
    const newHistory = [
      ...updatedHistory,
      { role: "model", message: response },
    ];

    // Update chat history
    setChatHistory(newHistory);

    // Reset states
    setLoading(false);
    setInput(""); // Reset input field
    setUploadedImage(null); // Clear uploaded image after response
    setMimeType("");
    console.log(allChats);
  };

  const contextValue = {
    onSent,
    chatHistory, // Stores text and image inputs
    allChats, // Holds all chat sessions
    setAllChats,
    loading,
    input,
    setInput,
    newChat,
    setChatHistory,
    uploadedImage,
    setUploadedImage,
    setMimeType,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
