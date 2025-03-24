import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function UseRef() {
  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">useRef</h2>
      <p className="pb-2">
        A hook that provides a way to create a mutable reference that persists
        across component re-renders. It stores a value that doesn’t cause
        re-renders when it changes.
      </p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <div className="border rounded-lg p-4">
        <p className="pb-2">Render Counter</p>
        <RenderCounter />
      </div>

      <div className="border rounded-lg p-4 mt-4">
        <p className="pb-2">Stopwatch</p>
        <Stopwatch />
      </div>
    </article>
  );
}

export default UseRef;

function RenderCounter() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  // when [] is omitted, it will run on every render.

  return (
    <>
      <Textarea
        placeholder="Type your message here and watch the render count increment"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        Render Count: <b>{count.current}</b>
      </p>
    </>
  );
}

function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h3 className="font-semibold">Time passed: {secondsPassed.toFixed(3)}</h3>
      <div className="pt-4 flex gap-4">
        <Button variant="outline" onClick={handleStart}>
          Start
        </Button>
        <Button variant="outline" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </>
  );
}
