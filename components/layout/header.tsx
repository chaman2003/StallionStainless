"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import LanguageSelector from "@/components/language-selector"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="bg-zinc-800 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-400">Stallion</span>
            <span className="text-2xl font-bold">Stainless</span>
          </div>
        </Link>

        <div className="flex-1 max-w-xl mx-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for a product, a brand..."
              className="w-full py-2 px-4 rounded-md text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-0 top-0 bottom-0 bg-blue-500 px-4 rounded-r-md">
              <Search className="h-5 w-5 text-white" />
            </button>
          </form>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Link href="/exhibit" className="bg-blue-500 text-white px-4 py-1 rounded text-sm">
            EXHIBIT WITH US
          </Link>
        </div>
      </div>
    </header>
  )
}
