import Link from "next/link"
import ProductCard from "@/components/product-card"
import CategorySidebar from "@/components/category-sidebar"
import { searchProducts } from "@/lib/data"

interface SearchPageProps {
  searchParams: { q: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const results = searchProducts(query)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Categories Sidebar */}
        <div className="w-full md:w-1/4">
          <CategorySidebar />
        </div>

        {/* Search Results */}
        <div className="w-full md:w-3/4">
          <div className="border-b border-gray-200 pb-2 mb-6">
            <h2 className="text-lg font-semibold text-gray-600">Search Results for "{query}"</h2>
            <p className="text-sm text-gray-500">{results.length} products found</p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <ProductCard
                    image={product.images[0]}
                    title={product.title}
                    brand={product.brand}
                    manufacturer={product.manufacturer}
                    tags={product.tags}
                    isNew={product.isNew}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search terms or browse categories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

