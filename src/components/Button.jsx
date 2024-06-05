import { useTheme } from "../context/ThemeContext";


export default function Button({ children }) {
   // we need theme here
  // 3. use useContext where we need wtih ThemeContext that create with createContext
  const {theme} = useTheme()

  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
