import Link from "next/link"
import { notFound } from "next/navigation"
import ProductCard from "@/components/product-card"
import CategorySidebar from "@/components/category-sidebar"
import { getProductsByCategory, categories } from "@/lib/data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Convert URL param to proper category format
  const categoryParam = decodeURIComponent(params.category).toUpperCase()

  // Find the category in our data
  const category = categories.find(
    (c) => c.name === categoryParam || c.name.replace(/\s+&\s+/g, "-").toLowerCase() === params.category,
  )

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(category.name)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Categories Sidebar */}
        <div className="w-full md:w-1/4">
          <CategorySidebar />
        </div>

        {/* Category Products */}
        <div className="w-full md:w-3/4">
          <div className="border-b border-gray-200 pb-2 mb-6">
            <h1 className="text-xl font-semibold text-gray-800">{category.name}</h1>
            <p className="text-sm text-gray-500">{products.length} products</p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
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
              <p className="text-gray-500 mt-2">Try browsing other categories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

