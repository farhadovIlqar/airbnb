import { Params } from "@/types/type"
import file from "@/data/airbnb-list.json" with { type: "json" }
import Homedetails from "@/components/Homedetails"

export default async function Home({ params }: Params) {
  const { id } = await params

  const selectedHome = file.map((item) => (item)).filter((item) => item.id == id)[0]

  return (
    <main className="p-4">
      <Homedetails home={selectedHome} />
    </main>
  )
}
