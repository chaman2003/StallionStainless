// Mock data for the application

export interface Product {
  id: string
  title: string
  brand: string
  manufacturer: string
  description: string
  category: string
  subcategory: string
  tags: string[]
  images: string[]
  price?: string
  isNew: boolean
  specifications?: Record<string, string>
  relatedProducts?: string[]
}

export interface Category {
  name: string
  subcategories: string[]
}

export const categories: Category[] = [
  {
    name: "FURNITURE",
    subcategories: ["Chairs", "Tables", "Sofas", "Beds", "Storage"],
  },
  {
    name: "DECORATION",
    subcategories: ["Lighting", "Textiles", "Mirrors", "Artwork", "Vases"],
  },
  {
    name: "LIGHTING",
    subcategories: ["Ceiling", "Wall", "Floor", "Table", "Outdoor"],
  },
  {
    name: "KITCHEN & BATHROOM",
    subcategories: ["Cabinets", "Countertops", "Fixtures", "Appliances"],
  },
  {
    name: "GARDEN & TERRACE",
    subcategories: ["Furniture", "Planters", "Shade", "Decking"],
  },
  {
    name: "OFFICES",
    subcategories: ["Desks", "Chairs", "Storage", "Partitions"],
  },
  {
    name: "PUBLIC BUILDINGS, HOSPITALITY",
    subcategories: ["Seating", "Tables", "Lighting", "Acoustic Solutions"],
  },
  {
    name: "PUBLIC SPACES, LANDSCAPING",
    subcategories: ["Urban Furniture", "Lighting", "Planters", "Pavements"],
  },
  {
    name: "FLOORING & WALLCOVERING",
    subcategories: ["Tiles", "Wood", "Carpet", "Vinyl", "Wallpaper"],
  },
  {
    name: "HEATING, AIR CONDITIONING, ELECTRICITY",
    subcategories: ["HVAC Systems", "Radiators", "Controls", "Ventilation"],
  },
  {
    name: "INTERIOR & EXTERIOR FITTINGS",
    subcategories: ["Doors", "Windows", "Hardware", "Railings"],
  },
  {
    name: "BUILDING & CONSTRUCTION",
    subcategories: ["Materials", "Systems", "Tools", "Equipment"],
  },
]

export const products: Product[] = [
  {
    id: "p1",
    title: "COMMERCIAL COFFEE GRINDER",
    brand: "Q-GRIND",
    manufacturer: "Quamar",
    description:
      "Professional coffee grinder with precision grinding mechanism, suitable for commercial use in cafes and restaurants. Features adjustable grind settings and high-capacity bean hopper.",
    category: "KITCHEN & BATHROOM",
    subcategory: "Appliances",
    tags: ["plain", "cotton", "linen"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$899",
    isNew: true,
    specifications: {
      Power: "350W",
      Capacity: "1kg",
      Dimensions: "24 x 16 x 40 cm",
      Weight: "12kg",
      Material: "Stainless Steel, Aluminum",
    },
  },
  {
    id: "p2",
    title: "CURTAIN FABRIC",
    brand: "VILLA",
    manufacturer: "SAHCO",
    description:
      "Luxurious curtain fabric with elegant drape and soft texture. Perfect for high-end residential and hospitality projects. Available in multiple colorways.",
    category: "DECORATION",
    subcategory: "Textiles",
    tags: ["plain", "cotton", "polyester"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$75/meter",
    isNew: true,
    specifications: {
      Width: "140cm",
      Composition: "60% Cotton, 40% Polyester",
      Weight: "320g/m²",
      Care: "Dry clean only",
      "Fire Rating": "BS5867 Part 2 Type B",
    },
  },
  {
    id: "p3",
    title: "UPHOLSTERY FABRIC",
    brand: "PLATEAU TEXTURE",
    manufacturer: "LEE JOFA",
    description:
      "Premium upholstery fabric with textured weave and exceptional durability. Ideal for residential and commercial applications requiring both style and performance.",
    category: "DECORATION",
    subcategory: "Textiles",
    tags: ["plain", "cotton", "polyester"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$120/meter",
    isNew: true,
    specifications: {
      Width: "140cm",
      Composition: "45% Cotton, 35% Polyester, 20% Viscose",
      Weight: "580g/m²",
      Martindale: "45,000 rubs",
      "Fire Rating": "BS5852 Crib 5",
    },
  },
  {
    id: "p4",
    title: "CORNER WARDROBE",
    brand: "ANTIBES",
    manufacturer: "Boffi",
    description:
      "Contemporary corner wardrobe with minimalist design and premium materials. Features customizable interior configurations and integrated lighting options.",
    category: "FURNITURE",
    subcategory: "Storage",
    tags: ["built-in", "contemporary", "leather"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$4,500",
    isNew: true,
    specifications: {
      Dimensions: "240 x 240 x 260 cm",
      Materials: "Lacquered MDF, Aluminum, Glass",
      "Finish Options": "Matt or Glossy Lacquer",
      Hardware: "Soft-close hinges",
      Features: "LED lighting, customizable shelving",
    },
  },
  {
    id: "p5",
    title: "CONTEMPORARY KITCHEN",
    brand: "SIBS CUT",
    manufacturer: "LAGO",
    description:
      "Modern kitchen system with innovative modular design. Features clean lines, premium materials, and customizable configurations to suit various spaces.",
    category: "KITCHEN & BATHROOM",
    subcategory: "Cabinets",
    tags: ["steel", "laminate", "wooden"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$12,000",
    isNew: true,
    specifications: {
      Materials: "Lacquered MDF, Stainless Steel, Tempered Glass",
      "Countertop Options": "Quartz, Porcelain, Stainless Steel",
      "Cabinet Depth": "60cm",
      Hardware: "Push-to-open mechanism",
      Features: "Integrated lighting, customizable layouts",
    },
  },
  {
    id: "p6",
    title: "STRIPED SHEER CURTAIN FABRIC",
    brand: "VISTULA",
    manufacturer: "OSBORNE & LITTLE",
    description:
      "Elegant striped sheer curtain fabric with subtle texture and gentle drape. Perfect for creating light, airy spaces while maintaining privacy.",
    category: "DECORATION",
    subcategory: "Textiles",
    tags: ["linen", "viscose", "jute"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$95/meter",
    isNew: true,
    specifications: {
      Width: "300cm",
      Composition: "70% Linen, 20% Viscose, 10% Jute",
      Weight: "120g/m²",
      Care: "Gentle machine wash",
      Features: "UV resistant, natural fiber blend",
    },
  },
  {
    id: "p7",
    title: "MODULAR OFFICE DESK",
    brand: "WORKSTATION PRO",
    manufacturer: "Herman Miller",
    description:
      "Professional modular desk system designed for modern workspaces. Features height-adjustable surfaces, cable management, and configurable layouts.",
    category: "OFFICES",
    subcategory: "Desks",
    tags: ["modular", "adjustable", "ergonomic"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$1,850",
    isNew: false,
    specifications: {
      Dimensions: "160 x 80 x 65-130 cm (height adjustable)",
      Materials: "Laminate, Steel, Aluminum",
      "Weight Capacity": "120kg",
      Features: "Electric height adjustment, cable management",
      Warranty: "10 years",
    },
  },
  {
    id: "p8",
    title: "PENDANT LIGHT",
    brand: "HALO SERIES",
    manufacturer: "Artemide",
    description:
      "Contemporary pendant light with minimalist design and superior light quality. Features dimmable LED technology and adjustable suspension.",
    category: "LIGHTING",
    subcategory: "Ceiling",
    tags: ["LED", "dimmable", "aluminum"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$780",
    isNew: false,
    specifications: {
      Diameter: "45cm",
      "Light Source": "LED 25W",
      "Color Temperature": "2700K-3000K",
      Materials: "Aluminum, PMMA diffuser",
      Features: "Dimmable, adjustable cable length",
    },
  },
  {
    id: "p9",
    title: "PORCELAIN FLOOR TILES",
    brand: "MARMOTECH",
    manufacturer: "Marazzi",
    description:
      "High-performance porcelain tiles with marble effect. Suitable for residential and commercial applications with high foot traffic.",
    category: "FLOORING & WALLCOVERING",
    subcategory: "Tiles",
    tags: ["porcelain", "marble-effect", "rectified"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$65/m²",
    isNew: false,
    specifications: {
      Size: "60 x 60 cm",
      Thickness: "10mm",
      Finish: "Matt or Polished",
      "PEI Rating": "Class 4",
      Features: "Frost resistant, low water absorption",
    },
  },
  {
    id: "p10",
    title: "ACOUSTIC WALL PANELS",
    brand: "SOUNDBLOC",
    manufacturer: "Ecophon",
    description:
      "High-performance acoustic wall panels designed to reduce noise and echo in commercial and public spaces. Available in various colors and patterns.",
    category: "PUBLIC BUILDINGS, HOSPITALITY",
    subcategory: "Acoustic Solutions",
    tags: ["acoustic", "fire-resistant", "decorative"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$120/m²",
    isNew: false,
    specifications: {
      Size: "60 x 60 cm or 120 x 60 cm",
      Thickness: "40mm",
      "NRC Rating": "0.95",
      "Fire Rating": "Class A",
      Materials: "Recycled polyester fiber, aluminum frame",
    },
  },
  {
    id: "p11",
    title: "OUTDOOR LOUNGE CHAIR",
    brand: "RIVIERA",
    manufacturer: "Kettal",
    description:
      "Premium outdoor lounge chair with weather-resistant materials and ergonomic design. Perfect for residential gardens, hotel terraces, and poolside areas.",
    category: "GARDEN & TERRACE",
    subcategory: "Furniture",
    tags: ["weather-resistant", "aluminum", "ergonomic"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$1,250",
    isNew: false,
    specifications: {
      Dimensions: "80 x 70 x 75 cm",
      Materials: "Powder-coated aluminum, Outdoor fabric",
      Weight: "12kg",
      Features: "UV resistant, quick-dry foam, stackable",
      Warranty: "5 years",
    },
  },
  {
    id: "p12",
    title: "SMART THERMOSTAT",
    brand: "CLIMATEIQ",
    manufacturer: "Nest",
    description:
      "Intelligent thermostat system with energy-saving features and remote control capabilities. Compatible with major HVAC systems and smart home platforms.",
    category: "HEATING, AIR CONDITIONING, ELECTRICITY",
    subcategory: "Controls",
    tags: ["smart", "wifi-enabled", "energy-efficient"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    price: "$249",
    isNew: true,
    specifications: {
      Dimensions: "8.4 x 8.4 x 3.2 cm",
      Power: "24V AC",
      Connectivity: "Wi-Fi, Bluetooth",
      Compatibility: "Works with Google Home, Amazon Alexa, Apple HomeKit",
      Features: "Learning algorithm, remote control, energy history",
    },
  },
]

export const newsArticles = [
  {
    id: "n1",
    title: "Sustainable Materials Reshaping Modern Architecture",
    excerpt: "Explore how eco-friendly materials are transforming building design and construction practices.",
    date: "2023-05-15",
    image: "/placeholder.svg?height=300&width=500",
    category: "Sustainability",
  },
  {
    id: "n2",
    title: "Milan Design Week 2023: Key Trends and Innovations",
    excerpt: "A comprehensive overview of the standout designs and emerging trends from this year's Salone del Mobile.",
    date: "2023-04-28",
    image: "/placeholder.svg?height=300&width=500",
    category: "Events",
  },
  {
    id: "n3",
    title: "Smart Home Integration in Commercial Spaces",
    excerpt: "How IoT and connected technologies are being implemented in office buildings and retail environments.",
    date: "2023-03-12",
    image: "/placeholder.svg?height=300&width=500",
    category: "Technology",
  },
  {
    id: "n4",
    title: "Biophilic Design: Bringing Nature Indoors",
    excerpt:
      "The growing trend of incorporating natural elements into interior spaces for improved wellbeing and productivity.",
    date: "2023-02-20",
    image: "/placeholder.svg?height=300&width=500",
    category: "Interior Design",
  },
]

export const magazines = [
  {
    id: "m1",
    title: "Modern Spaces: Commercial Design Quarterly",
    issue: "Spring 2023",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Featuring innovative commercial interiors and architectural solutions for the modern workplace.",
  },
  {
    id: "m2",
    title: "Residential Architecture Today",
    issue: "Summer 2023",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Showcasing exceptional residential projects and emerging trends in home design.",
  },
  {
    id: "m3",
    title: "Sustainable Building & Design",
    issue: "April 2023",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Exploring eco-friendly materials, energy-efficient systems, and sustainable building practices.",
  },
  {
    id: "m4",
    title: "Hospitality Spaces",
    issue: "Q2 2023",
    cover: "/placeholder.svg?height=400&width=300",
    description: "The latest innovations in hotel, restaurant, and leisure facility design.",
  },
]

export const catalogs = [
  {
    id: "c1",
    title: "Contemporary Furniture Collection 2023",
    manufacturer: "Herman Miller",
    cover: "/placeholder.svg?height=400&width=300",
    pages: 86,
  },
  {
    id: "c2",
    title: "Lighting Solutions for Commercial Spaces",
    manufacturer: "Artemide",
    cover: "/placeholder.svg?height=400&width=300",
    pages: 124,
  },
  {
    id: "c3",
    title: "Kitchen Systems and Appliances",
    manufacturer: "Boffi",
    cover: "/placeholder.svg?height=400&width=300",
    pages: 98,
  },
  {
    id: "c4",
    title: "Architectural Hardware Catalog",
    manufacturer: "FSB",
    cover: "/placeholder.svg?height=400&width=300",
    pages: 156,
  },
  {
    id: "c5",
    title: "Flooring Solutions: Residential & Commercial",
    manufacturer: "Marazzi",
    cover: "/placeholder.svg?height=400&width=300",
    pages: 112,
  },
  {
    id: "c6",
    title: "Outdoor Furniture and Accessories",
    manufacturer: "Kettal",
    cover: "/placeholder.svg?height=400&width=300",
    pages: 78,
  },
]

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter((product) => product.subcategory === subcategory)
}

export function getNewProducts(limit = 6): Product[] {
  return products.filter((product) => product.isNew).slice(0, limit)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.manufacturer.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}

