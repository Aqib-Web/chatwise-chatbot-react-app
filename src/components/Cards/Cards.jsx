import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Compass, Lightbulb, List, Map } from "lucide-react";

import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/Context";

export default function Cards() {
  const { setInput, onSent, input } = useContext(Context);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const cards = [
    {
      title: "Help me get organized with a list of 10 tips",
      icon: <List className="h-6 w-6" />,
    },
    {
      title: "Quiz me on famous sites around the world",
      icon: <Map className="h-6 w-6" />,
    },
    {
      title: "Explain what the keto diet is in simple terms",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Explain how something works like an engineer",
      icon: <Compass className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    if (isCardClicked) {
      onSent(input); // Only trigger onSent when a card is clicked
      setIsCardClicked(false); // Reset the flag after triggering
    }
  }, [input, isCardClicked, onSent]);

  return (
    <div className="flex-1 lg:mx-16 xl:mx-48 pt-6 pb-16">
      <h1 className="text-5xl pb-2 font-medium">Hello there!</h1>
      <h1 className="text-5xl pb-[8%] font-bold text-gray-300">
        How can I help you today?
      </h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between bg-muted hover:bg-muted/40 cursor-pointer"
            onClick={() => {
              setInput(card.title); // Set the input value
              setIsCardClicked(true); // Set the flag for the click event
            }}
          >
            <CardContent className="pt-6 xl:pb-6">
              <p className="text-md font-medium">{card.title}</p>
            </CardContent>
            <CardFooter className="justify-end">{card.icon}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
