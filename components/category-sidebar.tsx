"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { categories } from "@/lib/data"

export default function CategorySidebar() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (category: typeof categories[number]): void => {
    setExpandedCategory(expandedCategory === category.name ? null : category.name)
  }

  return (
    <div className="border rounded-md">
      {categories.map((category) => (
        <div key={category.name} className="border-b last:border-b-0">
          <button
            className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-50"
            onClick={() => toggleCategory(category)}
          >
            <span className="text-blue-600 font-medium">{category.name}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform ${
                expandedCategory === category.name ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {expandedCategory === category.name && (
            <div className="bg-gray-50 px-4 py-2">
              <ul className="space-y-1">
                {category.subcategories.map((sub) => (
                  <li key={sub}>
                    <Link
                      href={`/subcategory/${sub.toLowerCase().replace(/ /g, "-")}`}
                      className="block py-1 hover:text-blue-600"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

