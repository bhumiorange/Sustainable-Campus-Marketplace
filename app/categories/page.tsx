import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  "Books & Study Materials",
  "Electronics",
  "Furniture",
  "Sports Equipment",
  "Lab Equipment",
  "Stationery",
  "Clothing",
  "Others",
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Browse Categories</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category.toLowerCase().replace(/ /g, "-")}`}
            className="group relative overflow-hidden rounded-lg bg-green-50 p-6 transition-colors hover:bg-green-100"
          >
            <h2 className="font-semibold text-green-800">{category}</h2>
            <p className="text-sm text-green-600">Browse items →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

