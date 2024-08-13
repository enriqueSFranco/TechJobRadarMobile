import { useContext } from "react"
import { ThemeContext, type ThemeContextType } from "@/context/ThemeContext"

export function useThemeContext (): ThemeContextType {
  const ctx = useContext(ThemeContext)

  if (ctx === null) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }

  return ctx
}