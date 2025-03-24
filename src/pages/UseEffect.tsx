import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function UseEffect() {
  const [roomId, setRoomId] = useState("General");
  const options: string[] = ["General", "Travel", "Music"];

  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">useEffect</h2>
      <p className="pb-2">
        A special hook that lets you run side effects in React. It is similar to
        componentDidMount and componentDidUpdate, but it only runs when the
        component (or some of its props) changes and during the initial mount.
      </p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <p className="pb-2">
        On this example, when you change the chatroom dropdown, the effect will
        show the side effect of the action
      </p>
      <div className="border rounded-lg p-4">
        <p className="pb-2">Choose the chat room:</p>
        <Select value={roomId} onValueChange={(e) => setRoomId(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select room" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ChatRoom roomId={roomId} />
      </div>
    </article>
  );
}

export default UseEffect;

function ChatRoom({ roomId }: { roomId: string }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return <h4 className="text-2xl font-semibold">Welcome to the {roomId} room!</h4>;
}

// dummy function only
function createConnection(roomId: string) {
  return {
    connect() {
      toast(`✅ Connected to ${roomId}`);
    },
    disconnect() {
      toast(`❌ Disconnected from ${roomId}`);
    },
  };
}
