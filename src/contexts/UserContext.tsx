'use client'

import { DataItem } from "@/types/type"
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { UserContextType } from "@/types/type"


export const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [favoriteList, setFavoriteList] = useState<DataItem[]>([]);
    const isInitialized = useRef(false)

    useEffect(() => {
        const storedData = localStorage.getItem("favorites");
        if (storedData) {
            try {
                setFavoriteList(JSON.parse(storedData));
            } catch (error) {
                console.error("Local storage parse error:", error);
            }
        }
        isInitialized.current = true
    }, []);

    useEffect(() => {
        if (isInitialized.current) {
            localStorage.setItem("favorites", JSON.stringify(favoriteList));
        }
    }, [favoriteList]);

    const toggleFavorite = useCallback((home: DataItem) => {
        setFavoriteList((prev) => {
            const exists = prev.find((h) => h.id === home.id);
            if (exists) {
                return prev.filter((h) => h.id !== home.id);
            } else {
                return [...prev, home];
            }
        });
    }, []);

    const isFavorite = useCallback((id: string | number) => {
        return favoriteList.some((h) => h.id === id);
    }, [favoriteList]);

    const contextValue = useMemo(() => ({
        favoriteList,
        toggleFavorite,
        isFavorite
    }), [favoriteList, toggleFavorite, isFavorite]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
