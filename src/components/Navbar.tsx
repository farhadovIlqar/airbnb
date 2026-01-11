import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900 active:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/favourites"
                  className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-gray-900 active:text-white"
                >
                  Favourites
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
