import { createContext, useState } from "react"

const enum ThemeName {
  Light = 'light',
  Dark = 'dark'
}

type Theme = ThemeName.Light | ThemeName.Dark

type ThemeContextType = {
  theme: Theme
  toggle: () => void
}

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [theme, updateTheme] = useState<Theme>(ThemeName.Light)

  function toggle () {
    updateTheme(prevTheme => prevTheme === ThemeName.Light ? ThemeName.Dark : ThemeName.Light)
  }

  const data: ThemeContextType = {
    theme,
    toggle
  }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}