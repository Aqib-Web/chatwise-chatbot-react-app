import { MessageSquare, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useContext } from "react";
import { Context } from "@/context/Context";

export default function Sidebar() {
  const { prevPrompts, newChat } = useContext(Context);

  return (
    <div className="hidden bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* <div className="flex h-14 items-centerpx-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <BotMessageSquare  className="h-6 w-6" />
              <span className="">ChatWise</span>
            </a>
          </div> */}
        <div className="flex-1 mt-20">
          <div className="flex-1 flex ">
            <Button
              variant="secondary"
              size="lg"
              className=" text-normal m-3 mb-4 tracking-wider rounded-full text-left text-muted-foreground"
              onClick={() => newChat()}
            >
              <Plus className="h-5 w-5 mr-3" />
              &nbsp;New Chat
            </Button>
          </div>
          <div className="flex-1 flex ">
            <span className="font-semibold px-6 py-2  text-sm">History</span>
          </div>

          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {prevPrompts.map((item, index) => {
              return (
                <span
                  key={index}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer hover:bg-muted "
                >
                  <MessageSquare className="h-4 w-4" />
                  {item.slice(0, 26)}
                  {item.length > 26 && "..."}
                </span>
              );
            })}
            {/* <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <MessageSquare className="h-4 w-4" />
              Products{" "}
            </a> */}
          </nav>
        </div>
        {/* <div className="mt-auto p-8">
            <Button variant="ghost">Logout</Button>
            <Button
              variant="ghost"
              size="lg"
              className=" rounded-lg text-md tracking-wider w-full text-left "
            >
              <Plus />
              &nbsp;Log out
            </Button>
          </div> */}
      </div>
    </div>
  );
}
