import { Input } from "@/components/ui/input";
import useFormInput from "../hooks/useFormInput";

function FormExample() {
  const firstNameProps = useFormInput("Kristopher");
  const lastNameProps = useFormInput("Ong");

  return (
    <div className="border rounded-lg p-4">
      <div className="flex flex-row gap-4 flex-1">
        <label className="w-full">
          First name:
          <Input {...firstNameProps} />
        </label>
        <label className="w-full">
          Last name:
          <Input {...lastNameProps} />
        </label>
      </div>

      <p className="pt-2">
        <h1 className="text-2xl font-semibold">
          Good day, {firstNameProps.value} {lastNameProps.value}!
        </h1>
      </p>
    </div>
  );
}

function CustomHooks() {
  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">Custom Hooks</h2>
      <p className="pb-2">
        Building your own Hooks lets you extract component logic into reusable
        functions.
      </p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <FormExample />
    </article>
  );
}

export default CustomHooks;
