import { DataItem } from "@/types/type"
import Card from "./Card"


export default function Homes({ data }: { data: DataItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {data.map((f) => (
        <Card
          key={f.id}
          data={f}
        />
      ))}
    </div>
  )
}
