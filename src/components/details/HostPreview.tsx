import { DataItem } from "@/types/type"
import Image from "next/image"
import ReservCard from "./ReservCard"

export default function HostPreview({ home }: { home: DataItem }) {
  return (
    <div className="flex mx-5 mt-10 justify-between">
      <div className="m-5 mt-10">
        <div className="flex items-center gap-3">
          <div className="border border-purple-500 border-4 rounded-full">
            <Image
              src={home.host_picture_url}
              width={100}
              height={100}
              alt="host"
              className="rounded-full"
            />
          </div>

          <div>
            <p className="text-2xl text-black-900">
              Stay with {home.host_name}
            </p>
            <p className="text-xl text-gray-600">
              {2026 - Number(home.host_since.split("-")[0])} years hosting
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-4 mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>
          </div>

          <div>
            <p className="text-xl text-black-900">Great check-in experience</p>
            <p className="text-l text-gray-600">
              Recent guests loved the smooth start to this stay.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-4 mt-2">
          <div>
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>

          <div>
            <p className="text-xl text-black-900">
              Free cancellation before 2 weeks
            </p>
            <p className="text-l text-gray-600">
              Get a full refund if you change your mind.
            </p>
          </div>
        </div>
      </div>
      <ReservCard home={home} />
    </div>
  )
}
