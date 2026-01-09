import Image from "next/image"
import Button from "./Button"
export default function Card({
  name,
  description,
  imageUrl,
}: {
  name: string
  description: string
  imageUrl: string
}) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <div className="relative w-full size-60 overflow-hidden">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
        {name}
      </h5>

      <p className="mb-6 text-body">{description}</p>
      <div className="cursor-pointer inline-flex items-center text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        <Button text="Read more" />
      </div>
    </div>
  )
}
