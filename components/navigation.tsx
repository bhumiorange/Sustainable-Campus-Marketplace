"use client"

import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"

const categories = [
  {
    title: "Books & Study Materials",
    href: "/category/books",
    description: "Textbooks, notes, and study resources",
  },
  {
    title: "Electronics",
    href: "/category/electronics",
    description: "Laptops, calculators, and other devices",
  },
  {
    title: "Furniture",
    href: "/category/furniture",
    description: "Chairs, tables, and storage solutions",
  },
  {
    title: "Sports Equipment",
    href: "/category/sports",
    description: "Sports gear and fitness equipment",
  },
]

export function Navigation() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-600">DTU</span>
            <span className="text-sm font-medium">Marketplace</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {categories.map((category) => (
                      <li key={category.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sell" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium">Sell</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/donate" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium">Donate</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cart" legacyBehavior passHref>
                  <NavigationMenuLink className="font-medium">Cart</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-8">
          <div className="relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search items..." className="pl-8" />
          </div>
          <Button variant="outline">Sign in</Button>
          <Link href="/list-item">
            <Button className="bg-green-600 hover:bg-green-700">List Item</Button>
          </Link>
          <Link href="/checkout">
            <Button variant="outline">Checkout</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

