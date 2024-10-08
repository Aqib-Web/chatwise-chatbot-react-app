import { createContext, useEffect, useState } from "react";
import runGemini from "../config/gemini";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Current active chat
  const [allChats, setAllChats] = useState([]); // Stores all chat sessions

  const newChat = () => {
    setInput("");
    setLoading(false);
    setShowResult(false);
    saveChatSession();
    setChatHistory([]); //<------ * added this
  };

  const saveChatSession = () => {
    if (chatHistory.length > 0) {
      setAllChats([...allChats, chatHistory]);
      // setChatHistory([]); <------ * removed this
    }
  };

  const onSent = async (prompt) => {
    setLoading(true);
    setResultData("");

    const updatedHistory = [...chatHistory, { role: "user", message: prompt }];
    setChatHistory(updatedHistory);

    const response = await runGemini(updatedHistory);

    const newHistory = [
      ...updatedHistory,
      { role: "model", message: response },
    ];
    setChatHistory(newHistory);

    saveChatSession(); //<------ * added this
    setLoading(false);
    setInput("");
    console.log(allChats);
  };

  const contextValue = {
    onSent,
    chatHistory, // Current chat session being viewed
    setChatHistory, // Function to set the active chat history
    allChats, // All past chat sessions
    setAllChats, // Function to save chat sessions
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    saveChatSession,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
