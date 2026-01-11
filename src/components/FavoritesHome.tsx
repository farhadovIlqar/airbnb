'use client'
import { DataItem } from "@/types/type"
import FavoritesHomeCard from "./FavoritesHomeCard"
import { useUser } from "@/hooks/useUser"


export default function Homes() {
    const { favoriteList } = useUser()
    if (favoriteList.length === 0) {
        return (
            <div className="h-[60vh] flex flex-col items-center justify-center gap-2">
                <h3 className="text-2xl font-bold">Heç bir favori yoxdur</h3>
                <p className="text-neutral-500">Bəyəndiyiniz evləri hələ əlavə etməmisiniz.</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
            {favoriteList.map((home: DataItem) => (
                <FavoritesHomeCard
                    key={home.id}
                    data={home}
                />
            ))}
        </div>
    )
}
