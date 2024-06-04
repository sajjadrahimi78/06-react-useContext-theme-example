import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Button({ children }) {
   // we need theme here
  // 3. use useContext where we need wtih ThemeContext that create with createContext
  const theme = useContext(ThemeContext)

  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
