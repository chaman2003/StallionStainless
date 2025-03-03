import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { catalogs } from "@/lib/data"

export default function CatalogsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Product Catalogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalogs.map((catalog) => (
          <div
            key={catalog.id}
            className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative h-64 bg-gray-100">
              <Image
                src={catalog.cover || "/placeholder.svg"}
                alt={catalog.title}
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">{catalog.title}</h2>
              <p className="text-gray-600">{catalog.manufacturer}</p>
              <p className="text-sm text-gray-500">{catalog.pages} pages</p>

              <div className="mt-4 flex justify-between items-center">
                <Link href={`/catalogs/${catalog.id}`} className="text-blue-600 hover:underline text-sm font-medium">
                  View Catalog
                </Link>

                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

