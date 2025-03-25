"use client"

import { useTheme } from "@/context/theme-context"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex justify-center mb-8">
      <div className="flex">
        <input
          type="radio"
          id="switch-light"
          name="switch"
          value="light"
          className="sr-only"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        />
        <label
          htmlFor="switch-light"
          className={`
            bg-[#e4e4e4] text-black/60 text-lg px-6 py-3 border border-black/20 cursor-pointer
            rounded-l-lg transition-all
            ${theme === "light" ? "bg-[#070707] text-white" : ""}
          `}
        >
          Light
        </label>

        <input
          type="radio"
          id="switch-dark"
          name="switch"
          value="dark"
          className="sr-only"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        />
        <label
          htmlFor="switch-dark"
          className={`
            bg-[#e4e4e4] text-black/60 text-lg px-6 py-3 border border-black/20 cursor-pointer
            rounded-r-lg transition-all
            ${theme === "dark" ? "bg-[#fbe331] text-[#070707]" : ""}
          `}
        >
          Dark
        </label>
      </div>
    </div>
  )
}

