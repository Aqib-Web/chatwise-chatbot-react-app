import { createContext, useState } from "react";
import runGemini from "../config/gemini";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Holds current chat session
  const [allChats, setAllChats] = useState([]); // Holds all previous chat sessions

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
  };

  const onSent = async (prompt) => {
    setLoading(true);

    // Update chat history with the user's input
    const updatedHistory = [...chatHistory, { role: "user", message: prompt }];
    setChatHistory(updatedHistory);

    // Send message to Gemini
    const response = await runGemini(updatedHistory);

    // Update chat history with the model's response
    const newHistory = [
      ...updatedHistory,
      { role: "model", message: response },
    ];
    setChatHistory(newHistory);

    setLoading(false);
    setInput(""); // Reset input field
  };

  const contextValue = {
    onSent,
    chatHistory,
    allChats,
    setAllChats,
    loading,
    input,
    setInput,
    newChat,
    setChatHistory,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
