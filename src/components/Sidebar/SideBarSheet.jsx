import { Menu, BotMessageSquare, Plus, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function SideBarSheet() {
  return (
    <Sheet>
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
              >
                <Plus className="h-5 w-5 mr-3" />
                &nbsp;New Chat
              </Button>
            </SheetDescription>
          </div>
        </SheetHeader>

        <nav className="grid gap-2 text-sm font-medium">
          {/* <a href="#" className="flex items-center gap-2  font-semibold ">
          <BotMessageSquare className="h-6 w-6 " />
          <span className="text- tracking-wide">ChatWise</span>
        </a> */}
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <MessageSquare className="h-5 w-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
          >
            <MessageSquare className="h-5 w-5" />
            Orders
            {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge> */}
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <MessageSquare className="h-5 w-5" />
            Products
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <MessageSquare className="h-5 w-5" />
            Customers
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <MessageSquare className="h-5 w-5" />
            Analytics
          </a>
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
