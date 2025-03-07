import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import MainNavigation from "@/components/layout/main-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stallion Stainless - Furniture & Design Marketplace",
  description: "B2B marketplace for furniture and design products",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <MainNavigation />
        {children}
      </body>
    </html>
  )
}



import './globals.css'
