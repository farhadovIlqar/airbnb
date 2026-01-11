import Homes from "@/components/Homes"
import { DataItem } from "@/types/type"
import file from "@/data/airbnb-list.json" with { type: "json" }

export default function Home() {
  return (
      <main>
        <Homes data={file as unknown as DataItem[]} />
      </main>
  )
}
