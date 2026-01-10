import { DataItem } from "@/types/type"
import Card from "./Card"

export default function Homes({ file }: { file: DataItem[] }) {
  console.log(typeof file)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {file.map((f) => (
        <Card
          key={f.id}
          id={f.id}
          name={f.name}
          description={`${f.price || `$120`} for ${f.minimum_nights} nights`}
          imageUrl={f.picture_url}
          views={f.number_of_reviews}
        />
      ))}
    </div>
  )
}
