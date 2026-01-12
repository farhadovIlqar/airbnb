import { DataItem } from "@/types/type"

export default function Map({ home }: { home: DataItem }) {
  return (
    <div className="w-fit m-10">
      <iframe
        width="1200"
        height="400"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${home.latitude},${home.longitude}&output=embed`}
        allowFullScreen
      ></iframe>
    </div>
  )
}
