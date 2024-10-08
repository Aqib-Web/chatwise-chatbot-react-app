import { Menu, BotMessageSquare, Plus, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function SideBarSheet() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { saveChatSession, newChat, allChats, setChatHistory, chatHistory } =
    useContext(Context);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <div className="flex h-12 items-center px-4 lg:h-[60px] lg:px-6 ">
              <a
                href="/"
                className="flex items-center gap-2 font-semibold text-gray-800"
              >
                <BotMessageSquare className="h-8 w-8 " />
                <span className="text-xl tracking-wide">ChatWise</span>
              </a>
            </div>
          </SheetTitle>

          <div className="flex-1 flex ">
            <SheetDescription>
              <Button
                variant="secondary"
                size="lg"
                className=" text-normal m-3 mb-4 tracking-wider rounded-full text-left text-muted-foreground"
                onClick={() => {
                  newChat();
                  setSheetOpen(false);
                }}
              >
                <Plus className="h-5 w-5 mr-3" />
                &nbsp;New Chat
              </Button>
            </SheetDescription>
          </div>
        </SheetHeader>

        <nav className="grid gap-2 text-sm font-medium">
          {allChats.map((chat, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  setChatHistory(chat);
                  setSheetOpen(false);
                }} // Setting the active chat history
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer hover:bg-muted ${
                  chat === chatHistory ? "active" : ""
                }`}
              >
                <MessageSquare className="h-4 w-4" />
                {chat[0]?.message.slice(0, 26)}{" "}
                {/* Displaying the first message */}
                {chat[0]?.message.length > 26 && "..."}
              </span>
            );
          })}
        </nav>
        <div className="mt-auto text-center">
          <span className="text-muted-foreground fold-medium text-sm">
            Powered by Google Gemini 2.0
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBarSheet;
