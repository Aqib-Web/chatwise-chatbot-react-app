import Cards from "./Cards/cards";
import SearchBar from "./SearchBar/SearchBar";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

export default function Check() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex flex-1 items-center justify-center rounded-lg bordershadow-sm ">
            <div className="relative flex h-full w-full min-h-[50vh] flex-col rounded-xl p-4 lg:col-span-2">
              {/* <ChatBox /> */}
              <Cards />

              <SearchBar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
