const categories = [
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

const products = [
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
]

const newsArticles = [
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

const magazines = [
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

const catalogs = [
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

