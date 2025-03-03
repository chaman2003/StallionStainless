import Link from "next/link"
import ProductCard from "@/components/product-card"
import CategorySidebar from "@/components/category-sidebar"
import { getNewProducts } from "@/lib/data"

export default function Home() {
  const newProducts = getNewProducts(6)

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Categories Sidebar */}
          <div className="w-full md:w-1/4">
            <CategorySidebar />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="border-b border-gray-200 pb-2 mb-6">
              <h2 className="text-lg font-semibold uppercase text-gray-600">NEW PRODUCTS</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newProducts.map((product) => (
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
          </div>
        </div>
      </div>
    </main>
  )
}

