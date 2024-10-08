import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImagePlus, Send } from "lucide-react";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import { Label } from "../ui/label";

function SearchBar() {
  // const [input, setInput] = useState("");
  const {
    onSent,
    input,
    setInput,
    setUploadedImage,
    setMimeType,
    uploadedImage,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input || uploadedImage) {
      onSent(input);
    }
    setInput("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const mimeType = file.type;
      setMimeType(mimeType); // Set the MIME type
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); // Convert image to base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = () => {
    if (input || uploadedImage) {
      onSent(input);
    }
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
            <div className="flex items-center gap-2">
              {uploadedImage && (
                <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gray-500 border-4 border-slate-200">
                  <img
                    src={uploadedImage}
                    alt="Uploaded file preview"
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <Label htmlFor="file-upload" className="cursor-pointer ml-2">
                <ImagePlus
                  className={`h-5 w-5 hover:text-gray-900 ${
                    uploadedImage ? "text-gray-900 " : "text-gray-500"
                  } `}
                />
                <span className="sr-only">Upload file</span>
              </Label>
              <Input
                id="file-upload"
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <Button
              type="submit"
              variant="ghost"
              className="rounded-full h-10 w-10 p-0"
              disabled={input.trim() === "" && !uploadedImage}
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
