import { createContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";

// 1.create context
export const ThemeContext = createContext(null);
console.log(ThemeContext);

export default function MyApp() {
  const [theme, setTheme] = useState("light");

  // 2.provide data to context.provider 
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Form />
        <label>
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

// * ---------------------- The purpose of createContext is to remove props ----------------------