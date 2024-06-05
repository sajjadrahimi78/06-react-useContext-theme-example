
import { useTheme } from "../context/ThemeContext";

export default function Panel({ title, children }) {
  // we need theme here
  // 3. use useContext where we need wtih ThemeContext that create with createContext
  const {theme} = useTheme()

  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
  