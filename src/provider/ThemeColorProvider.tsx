import { createContext, useState } from "react";

// TODO: Pasar al archivo de enums
const enum ThemeName {
  Light = "light",
  Dark = "dark",
}

type Theme = ThemeName.Light | ThemeName.Dark;

type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeColorContextType = {
  theme: Theme;
  toggle: () => void;
};

export const ThemeColorContext = createContext<ThemeColorContextType | null>(
  null,
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, updateTheme] = useState<Theme>(ThemeName.Light);

  function toggle() {
    updateTheme((prevTheme) =>
      prevTheme === ThemeName.Light ? ThemeName.Dark : ThemeName.Light,
    );
  }

  const data: ThemeColorContextType = {
    theme,
    toggle,
  };

  return (
    <ThemeColorContext.Provider value={data}>
      {children}
    </ThemeColorContext.Provider>
  );
};
