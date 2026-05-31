"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-primary">LUXE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="/shop" className="transition-colors hover:text-primary">Shop</Link>
            <Link href="/categories" className="transition-colors hover:text-primary">Categories</Link>
            <Link href="/about" className="transition-colors hover:text-primary">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="h-9 w-64 rounded-md border border-input bg-background px-9 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Heart className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">0</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="p-2 md:hidden hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link href="/categories" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
