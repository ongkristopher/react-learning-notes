import { createContext, useContext, useState } from "react";
import { PanelProps } from "../models/panelProps";
import { ButtonProps } from "../models/buttonProps";
import { Button } from "@/components/ui/button";

const ThemeContext = createContext("");

function Themes() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="w-full">
        <Form />
        <label className="select-none">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
      </div>
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <div className="flex flex-1">
      <Panel title="Welcome">
        <div className="flex gap-3 mt-3">
          <ActionButton>Sign up</ActionButton>
          <ActionButton>Log in</ActionButton>
        </div>
      </Panel>
    </div>
  );
}

function Panel({ title, children }: PanelProps) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1 className="text-4xl font-bold">{title}</h1>
      {children}
    </section>
  );
}

function ActionButton({ children }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <Button variant="secondary" className={className}>
      {children}
    </Button>
  );
}

function UseContext() {
  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">useContext</h2>
      <p className="pb-2">
        The useContext Hook lets us share data between components without having
        to pass props down through every level of the component tree. This is
        particularly useful when many components need to access the same data or
        when components are deeply nested.
      </p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <Themes />
    </article>
  );
}

export default UseContext;
