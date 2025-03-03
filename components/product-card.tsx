import Image from "next/image"
import { Tag } from "lucide-react"

interface ProductCardProps {
  image: string
  title: string
  brand: string
  manufacturer: string
  tags: string[]
  isNew?: boolean
}

export default function ProductCard({ image, title, brand, manufacturer, tags, isNew = false }: ProductCardProps) {
  return (
    <div className="border rounded-md overflow-hidden bg-white hover:shadow-md transition-shadow h-full">
      {/* New badge */}
      {isNew && <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">New</div>}

      {/* Product image */}
      <div className="relative h-48 bg-gray-100">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-4" />
      </div>

      {/* Product info */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold uppercase">{manufacturer}</h3>
          <p className="text-sm uppercase font-medium">{title}</p>
          <p className="text-xs text-gray-500 uppercase">{brand}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

