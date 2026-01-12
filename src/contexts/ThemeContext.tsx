'use client'

import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ThemeContextType, ThemeType } from "@/types/type"

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>('light')
    const isInitialized = useRef(false)

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as ThemeType
        if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
            setTheme(storedTheme)
        } else {
            // Check system preference
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(systemPrefersDark ? 'dark' : 'light')
        }
        isInitialized.current = true
    }, [])

    // Apply theme to document element
    useEffect(() => {
        if (isInitialized.current) {
            const root = document.documentElement
            root.classList.remove('light', 'dark')
            root.classList.add(theme)
            localStorage.setItem("theme", theme)
        }
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }, [])

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme, toggleTheme])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}