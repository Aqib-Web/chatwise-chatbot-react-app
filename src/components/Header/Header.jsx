import SideBarSheet from "../Sidebar/SideBarSheet";
import { BotMessageSquare, CircleUser } from "lucide-react";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="flex h-14 items-center gap-4 px-4 lg:h-24 lg:px-6">
      <SideBarSheet />
      <div className="w-full flex-1">
        <div className="flex h-14 items-centerpx-4 lg:h-[60px] lg:px-6 ">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold text-gray-800"
          >
            <BotMessageSquare className="h-8 w-8 " />
            <span className="text-xl tracking-wide">ChatWise</span>
          </a>
        </div>
      </div>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </header>
  );
}

export default Header;
