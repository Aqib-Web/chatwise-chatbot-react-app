import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import ChatBox from "./components/ChatBox/ChatBox";

function App() {
  const { showResult } = useContext(Context);
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[270px_1fr] lg:grid-cols-[330px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex flex-1 items-center justify-center rounded-lg bordershadow-sm ">
              <div className="relative flex h-full w-full min-h-[50vh] flex-col rounded-xl p-4 lg:col-span-2">
                {!showResult ? <Cards /> : <ChatBox />}
                {/* <ChatBox />
                <Cards /> */}
                <SearchBar />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
