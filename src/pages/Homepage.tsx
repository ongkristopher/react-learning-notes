export default function Homepage() {
  const learningItems: string[] = [
    "CLI - Vite",
    "Components",
    "Rendering",
    "Functional Components",
    "JSX/TSX",
    "Props vs State",
    "Conditional Rendering",
    "Composition",
    "Lists and Keys",
    "Refs",
    "Events",
    "High Order Components",
    "Hooks",
    "Routing"
  ];

  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">Home</h2>
      <p className="pb-2">
        The aim of this project is to showcase our learnings on the react on <a href="https://roadmap.sh/react" target="_blank" className="underline">roadmap.sh</a> syllabus
      </p>
      <p className="pb-2">I have applied my learnings on the following items in this project:</p>
      <ul className="mx-5 list-inside list-disc">
        {learningItems.map((learningItem) => {
          return <li key={learningItem}>{learningItem}</li>;
        })}
      </ul>

      <p className="pt-4">Go to each item on the side navigation to see each demonstrations.</p>
    </article>
  );
}
