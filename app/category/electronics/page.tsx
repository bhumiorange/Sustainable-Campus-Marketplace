import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const electronicsItems = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop for students",
    price: 45000,
    image: "https://example.com/laptop-image.jpg",
  },
  {
    id: 2,
    name: "Scientific Calculator",
    description: "Advanced calculator for engineering students",
    price: 1500,
    image: "https://example.com/calculator-image.jpg",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "Noise-cancelling earbuds for focused study",
    price: 3000,
    image: "https://example.com/earbuds-image.jpg",
  },
  {
    id: 4,
    name: "External Hard Drive",
    description: "1TB storage for backing up your work",
    price: 4000,
    image: "https://example.com/harddrive-image.jpg",
  },
]

export default function ElectronicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Electronics</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {electronicsItems.map((item) => (
          <Card key={item.id}>
            <CardHeader className="p-0">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={200}
                className="aspect-[2/1] rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="line-clamp-1 text-lg">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex w-full items-center justify-between">
                <span className="font-bold text-green-600">₹{item.price}</span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

