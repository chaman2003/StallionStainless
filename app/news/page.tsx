import Image from "next/image"
import Link from "next/link"
import { newsArticles } from "@/lib/data"

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">News & Trends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 md:h-64">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1">
                {article.category}
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>

              <Link href={`/news/${article.id}`} className="text-blue-600 hover:underline font-medium">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

