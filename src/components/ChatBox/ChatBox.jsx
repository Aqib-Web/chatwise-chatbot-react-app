import { Context } from "@/context/Context";
import { useContext } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Bot, User } from "lucide-react";
import { marked } from "marked";
import { Badge } from "../ui/badge";

const formatStrongOnly = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Find all <p> tags
  const paragraphs = doc.querySelectorAll("p");

  paragraphs.forEach((p) => {
    // Check if the <p> has only one child and that child is a <strong> tag
    if (
      p.children.length === 1 &&
      p.firstElementChild.tagName === "STRONG" &&
      p.textContent === p.firstElementChild.textContent
    ) {
      // Add a custom class to those <p> with only <strong> as content
      p.classList.add("strong-only");
    }
  });

  return doc.body.innerHTML; // Return the updated HTML string
};

function ChatBox() {
  const { loading, chatHistory } = useContext(Context);

  return (
    <div className="flex-1 lg:mx-16 xl:mx-48 pt-6 pb-24">
      <div className="p-0 pt-0">
        <div className="space-y-2">
          {chatHistory.map((message, index) => (
            <div key={index}>
              {/* Check if message role is 'user' */}
              {message.role === "user" && (
                <>
                  <User className="h-8 w-8 p-1.5  rounded-full text-slate-700 bg-muted ml-auto mb-6" />
                  <div className="flex w-fit max-w-[80%] md:max-w-[75%]  flex-col gap-2 rounded-full px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground ">
                    {message.message}
                  </div>
                </>
              )}
              {/* Check if message role is 'model' */}
              {message.role === "model" && (
                <>
                  <Bot className="h-8 w-8 p-1.5  rounded-full text-white bg-slate-700" />

                  <div
                    className="resultData flex w-fit  max-w-[90%] md:max-w-[80%] flex-col gap-2 rounded-lg  px-3 py-2 md:p-6 text-sm  text-slate-900"
                    dangerouslySetInnerHTML={{
                      __html: formatStrongOnly(marked(message.message)),
                    }}
                  ></div>
                </>
              )}
            </div>
          ))}

          {/* Display skeleton loader when loading */}
          {loading && (
            <>
              <Skeleton className="w-[75%] h-[20px] rounded-lg px-3 bg-primary/20" />
              <Skeleton className="w-[75%] h-[20px] rounded-lg px-3 bg-primary/20" />
              <Skeleton className="w-[66%] h-[20px] rounded-lg px-3 bg-primary/20" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// function ChatBox() {
//   // const { showResult } = useContext(Context);
//   const { loading, input, chatHistory, resultData } = useContext(Context);
//   return (
//     <div className="flex-1 lg:mx-16 xl:mx-48 pt-6 pb-24">
//       <div className="p-0 pt-0">
//         <div className="space-y-2">
//           <User className="h-8 w-8 p-1.5  rounded-full text-slate-700 bg-muted ml-auto" />

//           <div className="flex w-fit max-w-[80%] md:max-w-[75%]  flex-col gap-2 rounded-full px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground ">
//             {recentPrompt}
//           </div>

//           <Bot className="h-8 w-8 p-1.5  rounded-full text-white bg-slate-700" />
//           {loading ? (
//             <>
//               <Skeleton className="w-[75%] h-[20px] rounded-lg px-3  bg-primary/20" />
//               <Skeleton className="w-[75%] h-[20px] rounded-lg px-3  bg-primary/20" />
//               <Skeleton className="w-[66%] h-[20px] rounded-lg px-3  bg-primary/20" />
//             </>
//           ) : (
//             <>
//               <div
//                 className="resultData flex w-fit  max-w-[90%] md:max-w-[80%] flex-col gap-2 rounded-lg  px-3 py-2 md:p-6 text-sm  text-slate-900"
//                 dangerouslySetInnerHTML={{
//                   __html: formatStrongOnly(marked(resultData)),
//                 }}
//               ></div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

export default ChatBox;
