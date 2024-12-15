import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const cartItems = [
    { id: 1, name: "Engineering Textbook", price: 499, quantity: 1 },
    { id: 2, name: "Scientific Calculator", price: 999, quantity: 1 },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 flex items-center gap-4 rounded-lg border p-4">
              <Image src="/placeholder.svg" alt={item.name} width={80} height={80} className="rounded-md" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">₹{item.price}</p>
              </div>
              <Input
                type="number"
                value={item.quantity}
                min={1}
                max={10}
                className="w-16"
                onChange={() => {}}
              />
              <Button variant="outline" size="sm">
                Remove
              </Button>
            </div>
          ))}
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
          <div className="mb-4 flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="mb-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>
          <Link href="/checkout">
            <Button className="w-full">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

