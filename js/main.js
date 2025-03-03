const categories = [
  { name: "Electronics" },
  { name: "Clothing" },
  { name: "Home Goods" },
  // Add more categories as needed
]

const products = [
  {
    title: "Laptop",
    brand: "Apple",
    manufacturer: "Apple Inc.",
    description: "Powerful and portable laptop",
    images: ["laptop.jpg"],
    tags: ["laptop", "apple", "electronics"],
  },
  {
    title: "T-Shirt",
    brand: "Nike",
    manufacturer: "Nike Inc.",
    description: "Comfortable and stylish t-shirt",
    images: ["tshirt.jpg"],
    tags: ["tshirt", "nike", "clothing"],
  },
  // Add more products as needed
]

document.addEventListener("DOMContentLoaded", () => {
  // Populate category sidebar
  const categoryList = document.getElementById("category-list")
  categories.forEach((category) => {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.href = `#${category.name.toLowerCase().replace(/\s+/g, "-")}`
    a.textContent = category.name
    li.appendChild(a)
    categoryList.appendChild(li)
  })

  // Populate product grid
  const productGrid = document.getElementById("product-grid")
  products.forEach((product) => {
    const productCard = createProductCard(product)
    productGrid.appendChild(productCard)
  })

  // Language selector functionality
  const languageBtn = document.getElementById("language-btn")
  const languageDropdown = document.getElementById("language-dropdown")
  const selectedLanguage = document.querySelector(".selected-language")

  languageBtn.addEventListener("click", () => {
    languageDropdown.style.display = languageDropdown.style.display === "block" ? "none" : "block"
  })

  languageDropdown.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      selectedLanguage.textContent = e.target.textContent
      languageDropdown.style.display = "none"
    }
  })

  // Close language dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
      languageDropdown.style.display = "none"
    }
  })

  // Search functionality
  const searchForm = document.getElementById("search-form")
  const searchInput = document.getElementById("search-input")

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchTerm = searchInput.value.toLowerCase()
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.manufacturer.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
    )

    productGrid.innerHTML = ""
    filteredProducts.forEach((product) => {
      const productCard = createProductCard(product)
      productGrid.appendChild(productCard)
    })
  })
})

function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  const img = document.createElement("img")
  img.src = product.images[0]
  img.alt = product.title

  const info = document.createElement("div")
  info.className = "product-info"

  const title = document.createElement("h3")
  title.className = "product-title"
  title.textContent = product.title

  const brand = document.createElement("p")
  brand.className = "product-brand"
  brand.textContent = product.brand

  const manufacturer = document.createElement("p")
  manufacturer.className = "product-manufacturer"
  manufacturer.textContent = product.manufacturer

  const tags = document.createElement("div")
  tags.className = "product-tags"
  product.tags.forEach((tag) => {
    const tagSpan = document.createElement("span")
    tagSpan.className = "product-tag"
    tagSpan.textContent = tag
    tags.appendChild(tagSpan)
  })

  info.appendChild(title)
  info.appendChild(brand)
  info.appendChild(manufacturer)
  info.appendChild(tags)

  card.appendChild(img)
  card.appendChild(info)

  return card
}

