import "./App.css";
import Form from "./components/Form";
import ToggleTheme from "./components/ToggleTheme";
import ThemeProvider from "./context/ThemeContext";

export default function MyApp() {
  // 2.provide data to context.provider
  return (
    <ThemeProvider>
      <div>
        <Form />
        <ToggleTheme/>
      </div>
    </ThemeProvider>
  );
}



// * ---------------------- The purpose of createContext is to remove props ----------------------
