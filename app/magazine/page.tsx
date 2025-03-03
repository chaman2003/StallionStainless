import Image from "next/image"
import Link from "next/link"
import { Book } from "lucide-react"
import { magazines } from "@/lib/data"

export default function MagazinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">E-Magazine</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {magazines.map((magazine) => (
          <div
            key={magazine.id}
            className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative h-80 bg-gray-100">
              <Image src={magazine.cover || "/placeholder.svg"} alt={magazine.title} fill className="object-contain" />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">{magazine.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{magazine.issue}</p>
              <p className="text-sm text-gray-700 mb-4">{magazine.description}</p>

              <Link
                href={`/magazine/${magazine.id}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
              >
                <Book className="h-4 w-4" />
                Read Online
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

