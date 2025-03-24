import { Button } from "@/components/ui/button";
import { useReducer } from "react";

interface State {
  age: number;
}

type Action = { type: "increment_age" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment_age":
      return { age: state.age + 1 };
    default:
      throw new Error("Unknown action.");
  }
}

function AgeIncrement() {
  const [state, dispatch] = useReducer(reducer, { age: 27 });

  return (
    <div className="border rounded-lg p-4">
      <Button
        variant="outline"
        onClick={() => {
          dispatch({ type: "increment_age" });
        }}
      >
        Increment age
      </Button>
      <p className="pt-2 text-lg font-semibold">
        Hello! You are {state.age} years old.
      </p>
    </div>
  );
}

function UseReducer() {
  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">useReducer</h2>
      <p className="pb-2">
        A React Hook that lets you add a reducer to your component.
      </p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <AgeIncrement />
    </article>
  );
}

export default UseReducer;
