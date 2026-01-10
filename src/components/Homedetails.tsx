import { DataItem } from "@/types/type"

export default function Homedetails({ home }: { home: DataItem }) {
  return (
    <div>
      <h1>{home.name}</h1>
    </div>
  )
}
