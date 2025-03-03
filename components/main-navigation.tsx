"use client"

import { useState } from "react"
import Link from "next/link"

export default function MainNavigation() {
  const [activeItem, setActiveItem] = useState("PRODUCTS")

  const navItems = ["PRODUCTS", "CATALOGS", "RFQ", "NEWS & TRENDS", "E-MAGAZINE"]

  return (
    <nav className="bg-zinc-700 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className={`block px-4 py-3 hover:bg-zinc-600 transition-colors ${
                  activeItem === item ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

