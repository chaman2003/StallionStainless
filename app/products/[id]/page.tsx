import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Heart, ChevronRight, Tag } from "lucide-react"
import { getProductById } from "@/lib/data"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-blue-600">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900">{product.title}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden bg-white">
            <div className="relative h-[400px]">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden bg-white flex-shrink-0 cursor-pointer hover:border-blue-500"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} - view ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {product.isNew && <span className="inline-block bg-yellow-400 text-xs font-bold px-2 py-1 rounded">New</span>}

          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl text-gray-700">{product.brand}</p>
            <p className="text-lg font-medium text-blue-600">{product.manufacturer}</p>
          </div>

          {product.price && <div className="text-2xl font-bold">{product.price}</div>}

          <p className="text-gray-700">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              >
                <Tag className="h-4 w-4 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div>
              <h2 className="text-xl font-bold mb-2">Specifications</h2>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-sm text-gray-500">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
              Request Quote
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2">
              <Heart className="h-5 w-5" />
              Add to Favorites
            </button>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">
              Category:{" "}
              <Link href={`/category/${product.category.toLowerCase()}`} className="text-blue-600 hover:underline">
                {product.category}
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              Subcategory:{" "}
              <Link
                href={`/subcategory/${product.subcategory.toLowerCase()}`}
                className="text-blue-600 hover:underline"
              >
                {product.subcategory}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

