import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";

function SearchBar() {
  // const [input, setInput] = useState("");
  const { onSent, input, setInput } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSent(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background p-4 py-6">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="pr-24 py-6 md:py-8 pl-6 rounded-full bg-muted/50 text-md"
          />
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center">
            <Button
              type="submit"
              variant="ghost"
              className="rounded-full h-10 w-10 p-0"
              disabled={input.trim() === ""}
            >
              <Send className="h-5 w-5 " />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
