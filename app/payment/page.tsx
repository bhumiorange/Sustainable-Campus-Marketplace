import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function PaymentPage() {
  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Payment</h1>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input id="expiryDate" placeholder="MM/YY" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="nameOnCard">Name on Card</Label>
          <Input id="nameOnCard" placeholder="Enter the name on your card" />
        </div>
        <div className="mt-6">
          <Button type="submit" className="w-full">Pay ₹1498</Button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <Link href="/checkout" className="text-sm text-muted-foreground hover:text-foreground">
          Back to Checkout
        </Link>
      </div>
    </div>
  )
}

