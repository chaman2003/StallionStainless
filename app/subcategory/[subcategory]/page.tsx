import Link from "next/link"
import { notFound } from "next/navigation"
import ProductCard from "@/components/product-card"
import CategorySidebar from "@/components/category-sidebar"
import { getProductsBySubcategory, categories } from "@/lib/data"

interface SubcategoryPageProps {
  params: {
    subcategory: string
  }
}

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  // Convert URL param to proper subcategory format
  const subcategoryParam = decodeURIComponent(params.subcategory).replace(/-/g, " ")

  // Find the subcategory in our data
  let foundSubcategory = ""
  let parentCategory = ""

  for (const category of categories) {
    const subcategory = category.subcategories.find((sub) => sub.toLowerCase() === subcategoryParam.toLowerCase())

    if (subcategory) {
      foundSubcategory = subcategory
      parentCategory = category.name
      break
    }
  }

  if (!foundSubcategory) {
    notFound()
  }

  const products = getProductsBySubcategory(foundSubcategory)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Categories Sidebar */}
        <div className="w-full md:w-1/4">
          <CategorySidebar />
        </div>

        {/* Subcategory Products */}
        <div className="w-full md:w-3/4">
          <div className="border-b border-gray-200 pb-2 mb-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link
                href={`/category/${parentCategory.toLowerCase().replace(/\s+&\s+/g, "-")}`}
                className="hover:text-blue-600"
              >
                {parentCategory}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{foundSubcategory}</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">{foundSubcategory}</h1>
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
              <p className="text-gray-500 mt-2">Try browsing other subcategories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

