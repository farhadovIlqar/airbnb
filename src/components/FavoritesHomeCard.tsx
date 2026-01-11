'use client'
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"
import { CardProps } from "@/types/type"
import { useUser } from "@/hooks/useUser"




export default function Card({ data }: CardProps) {
  const { toggleFavorite, isFavorite } = useUser()
  const isLiked = isFavorite(data.id)

  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <div className="relative w-full size-60 overflow-hidden">
        <Image src={data.picture_url} alt={data.name} fill className="object-cover" />
        <div className=" absolute top-0 m-2 p-1 bg-gray-800 border border-none rounded-lg gap-2 text-center flex items-center justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          {data.number_of_reviews}
        </div>
        <div
          className="cursor-pointer absolute top-0 right-0 m-2"
          onClick={() => toggleFavorite(data)}
        >
          {isLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </div>
      </div>
      <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
        {data.name}
      </h5>

      <p className="mb-6">{`${data.price || `$120`} for ${data.minimum_nights} nights`}</p>
      <div className="">
        <Link href={`/houses/${data.id}`}>
          <Button text="More" />
        </Link>
      </div>
    </div>
  )
}
