"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      document.body.style.color = "#fff"
      document.body.style.background = `
        fixed linear-gradient(#fbe331, #fbe331 6px, transparent 6px, transparent),
        fixed linear-gradient(transparent, #070707 70%),
        fixed repeating-linear-gradient(#2b2b2b, #2b2b2b 1px, transparent 1px, transparent 40px),
        fixed repeating-linear-gradient(to right, #2b2b2b, #2b2b2b 1px, transparent 1px, transparent 40px) #070707
      `
    } else {
      document.documentElement.classList.remove("dark")
      document.body.style.color = "#070707"
      document.body.style.background = `
        fixed linear-gradient(#070707, #070707 6px, transparent 6px, transparent),
        fixed linear-gradient(transparent, #fff 70%),
        fixed repeating-linear-gradient(#efefef, #efefef 1px, transparent 1px, transparent 40px),
        fixed repeating-linear-gradient(to right, #efefef, #efefef 1px, transparent 1px, transparent 40px) white
      `
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

