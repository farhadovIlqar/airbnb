import { DataItem } from "@/types/type"

export default function ReservCard({ home }: { home: DataItem }) {
  return (
    <div className="flex flex-col justify-around items-center border border-gray-300 shadow rounded-lg w-[35%]">
      <h1 className="text-4xl">${Number(home.price.slice(1, 3)) * 2} for 2 nights</h1>
      <div className="flex items-center border border-black h-fit">
        <input
          type="date"
          name="date"
          id="start_date"
          className="border border-black p-2"
          defaultValue="2026-07-22"
          readOnly
        />
        <input
          type="date"
          name="date"
          id="end_date"
          className="border border-black p-2"
          defaultValue="2026-07-24"
          readOnly
        />
      </div>
      <button
        type="button"
        className="rounded-lg cursor-pointer text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-base text-2xl px-7 py-4 text-center leading-5"
      >
        Reserve
      </button>
    </div>
  )
}
