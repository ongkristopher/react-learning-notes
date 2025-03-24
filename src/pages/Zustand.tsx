import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { create } from "zustand";

interface PopulationState {
  population: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllPopulation: () => void;
  updatePopulation: (newPopulation: number) => void;
}

const useStore = create<PopulationState>((set) => ({
  population: 100,
  increasePopulation: () =>
    set((state: { population: number }) => ({
      population: state.population + 1,
    })),
  decreasePopulation: () =>
    set((state: { population: number }) => ({
      population: state.population - 1,
    })),
  removeAllPopulation: () => set({ population: 0 }),
  updatePopulation: (newPopulation: number) =>
    set({ population: newPopulation }),
}));

function PopulationCounter() {
  const population = useStore((state) => state.population);
  return (
    <h1 className="text-2xl font-bold pb-8">
      {population} population{population > 1 ? "s" : ""} around here...
    </h1>
  );
}

function IncrementPopulation() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <Button onClick={increasePopulation}>+1 population</Button>;
}

function DecrementPopulation() {
  const population = useStore((state) => state.population);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  return (
    <Button disabled={population === 0} onClick={decreasePopulation}>
      -1 population
    </Button>
  );
}

function SetPopulation() {
  const [population, setPopulation] = useState<number | "">("");
  const updatePopulation = useStore((state) => state.updatePopulation);

  const handleSubmit = () => {
    if (typeof population === "number" && !isNaN(population)) {
      updatePopulation(population);
      setPopulation(0);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p>Set population here:</p>
      <Input
        type="number"
        placeholder="Set population to..."
        min="0"
        value={population}
        onChange={(e) =>
          setPopulation(e.target.value ? parseInt(e.target.value) : "")
        }
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

function RemoveAllPopulation() {
  const removeAllPopulation = useStore((state) => state.removeAllPopulation);
  return <Button onClick={removeAllPopulation}>Set Population to 0</Button>;
}

function Zustand() {
  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">
        State Management using Zustand
      </h2>
      <p className="pb-2">In this page, I used Zustand for state management</p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <div className="border rounded-lg p-4">
        <PopulationCounter />
        <div className="flex gap-4 pb-4">
          <DecrementPopulation />
          <IncrementPopulation />
          <RemoveAllPopulation />
        </div>
        <SetPopulation />
      </div>
    </article>
  );
}

export default Zustand;
