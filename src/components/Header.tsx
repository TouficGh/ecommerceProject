"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();

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
          </nav>
        </div>

        <div className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="relative group">
            <input
              type="search"
              placeholder="Search products, brands and more..."
              className="h-10 w-full rounded-md border border-input bg-gray-50 px-4 py-1 text-sm shadow-sm transition-all focus:bg-white focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-10 px-3 text-white bg-primary rounded-r-md hover:bg-orange-600">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-4">
          <Link href="/login" className="flex flex-col items-center p-2 hover:text-primary transition-colors group">
            <User className="h-5 w-5" />
            <span className="text-[10px] hidden md:block">Login</span>
          </Link>
          <Link href="/wishlist" className="flex flex-col items-center p-2 hover:text-primary transition-colors relative group">
            <Heart className="h-5 w-5" />
            <span className="text-[10px] hidden md:block">Favorites</span>
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="flex flex-col items-center p-2 hover:text-primary transition-colors relative group">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-[10px] hidden md:block">My Cart</span>
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            className="p-2 md:hidden hover:bg-gray-100 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
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
