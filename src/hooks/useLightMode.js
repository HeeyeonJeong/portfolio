import { useState } from "react";
import { theme } from "../Styles/theme";

export const useLightMode = () => {
  const { lightTheme, darkTheme } = theme;
  const [mode, setMode] = useState(darkTheme);

  const toggleTheme = () => {
    mode === darkTheme ? setMode(lightTheme) : setMode(darkTheme);
  };

  return { mode, toggleTheme };
};
