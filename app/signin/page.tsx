import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Sign In</h1>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/signup" className="text-sm text-muted-foreground hover:text-foreground">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  )
}

