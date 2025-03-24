import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { toast } from "sonner";

function UseCallback() {
  const [count, setCount] = useState(0);

  // Memoized function to prevent unnecessary re-renders of ChildComponent
  const handleClick = useCallback(() => {
    toast("👻 Boo!");
  }, []);

  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">useCallback</h2>
      <p className="pb-2">
        A React hook that returns a memoized version of a callback function.
        It's used to optimize performance by preventing unnecessary re-renders.
        Specifically, it helps avoid recreating functions when their
        dependencies haven't changed, which can be useful when passing callbacks
        to child components that rely on referential equality to prevent
        re-rendering.
      </p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <p className="pb-2">
        On this example, when you click the Click Me only the "👻 Boo!" is
        rendered and not re-rendering child component. Clicking the button with
        count will re-render the component and the child component.
      </p>
      <div className="pt-4 flex gap-4">
        <Button variant="outline" onClick={() => setCount(count + 1)}>
          You clicked this button {count} times
        </Button>
        <ChildComponent onClick={handleClick} />
      </div>
    </article>
  );
}

export default UseCallback;

function ChildComponent({ onClick }: { onClick: () => void }) {
  toast("ChildComponent rendered");
  return (
    <Button variant="outline" onClick={onClick}>
      Click Me (ChildComponent will not re-render)
    </Button>
  );
}
