'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Heart, Search, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export default function Header() {
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link href="/categories/fruits">Fruits</Link>
              <Link href="/categories/vegetables">Vegetables</Link>
              <Link href="/categories/organic">Organic</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Fresh Market</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/categories/fruits" className="text-sm font-medium">
            Fruits
          </Link>
          <Link href="/categories/vegetables" className="text-sm font-medium">
            Vegetables
          </Link>
          <Link href="/categories/organic" className="text-sm font-medium">
            Organic
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
      {isSearchOpen && (
        <div className="container py-4">
          <div className="flex gap-2">
            <Input
              type="search"
              placeholder="Search for fruits, vegetables..."
              className="flex-1"
            />
            <Button>Search</Button>
          </div>
        </div>
      )}
    </header>
  );
}