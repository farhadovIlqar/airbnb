"use client"
import { DataItem } from "@/types/type"
import ImageGallery from "./ImageGallery"
import { useUser } from "@/hooks/useUser"
import HostPreview from "./HostPreview"
import Map from "./Map"

export default function Homedetails({ home }: { home: DataItem }) {
  const { toggleFavorite, isFavorite } = useUser()
  const isLiked = isFavorite(home.id)
  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-3xl text-black mx-10">{home.name}</h1>
        <div className="flex justify-between gap-2 items-center cursor-pointer">
          <div className="flex justify-between gap-2 items-center cursor-pointer group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            <span className="text-xl text-gray-900 group-hover:underline">
              Share
            </span>
          </div>
          <div
            className="cursor-pointer top-0 right-0 m-2"
            onClick={() => toggleFavorite(home)}
          >
            {isLiked ? (
              <div className="flex justify-between items-center gap-1 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="red"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className="text-xl group-hover:underline">Save</span>
              </div>
            ) : (
              <div className="flex justify-between items-center gap-1 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className="text-xl group-hover:underline">Save</span>
              </div>
            )}
          </div>
        </div>
      </header>
      <ImageGallery url={home.picture_url} />
      <HostPreview home={home} />
      <Map home={home} />
    </>
  )
}
