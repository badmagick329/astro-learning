import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () => {
    let newMsg = "";
    do {
      newMsg = messages[Math.floor(Math.random() * messages.length)];
    } while (newMsg === greeting);

    return newMsg;
  };

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <h3 className="text-4xl font-black">{greeting}</h3>
      <button
        className="bg-primary border-border hover:bg-primary/80 text-primary-foreground px-2 py-1 hover:cursor-pointer"
        onClick={() => setGreeting(randomMessage())}
      >
        Generate new greeting
      </button>
    </div>
  );
}
