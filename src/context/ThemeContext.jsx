import { createContext, useContext, useState } from "react";

// 1.create context
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("ThemeContext was used outside of ThemeProvider")
  return context;
};
