"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MainNavigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "PRODUCTS", path: "/" },
    { name: "CATALOGS", path: "/catalogs" },
    { name: "RFQ", path: "/rfq" },
    { name: "NEWS & TRENDS", path: "/news" },
    { name: "E-MAGAZINE", path: "/magazine" },
  ]

  return (
    <nav className="bg-zinc-700 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto">
          {navItems.map((item) => {
            const isActive = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)

            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block px-4 py-3 hover:bg-zinc-600 transition-colors whitespace-nowrap ${
                    isActive ? "border-b-2 border-blue-500" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

