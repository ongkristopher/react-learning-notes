import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

function UseMemo() {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const items: string[] = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Grape",
      "Mango",
    ];
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]); // Recalculates only when 'query' changes

  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">useMemo</h2>
      <p className="pb-2">
        A React Hook that lets you cache the result of a calculation between
        re-renders.
      </p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <div className="border rounded-lg p-4">
        <h3 className="text-xl font-bold pb-8">Filtered List</h3>
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="mx-5 pt-4 list-inside list-disc">
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default UseMemo;
