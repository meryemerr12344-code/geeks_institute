import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    light: {
      background: "#ffffff",
      color: "#000000",
      height: "100vh",
      padding: "20px",
    },
    dark: {
      background: "#1e1e1e",
      color: "#ffffff",
      height: "100vh",
      padding: "20px",
    },
  };

  return (
    <div style={styles[theme]}>
      <h1>Theme Switcher</h1>
      <ThemeSwitcher />
    </div>
  );
}