import { useState } from "react";
import { Button } from "@/components/ui/button"


function UseState() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">useState</h2>
      <p className="pb-2">Used to manage the state of a component in functional components.</p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <Button variant="outline" onClick={handleIncrement}>
        You clicked this button {count} times
      </Button>
    </article>
  );
}

export default UseState;
