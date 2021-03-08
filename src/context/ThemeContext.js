import { createContext } from "react";
import { theme } from "../Styles/theme";

const { darkTheme } = theme;

export const ThemeContext = createContext({
  mode: darkTheme,
  toggleTheme: () => {
    return null;
  },
});
