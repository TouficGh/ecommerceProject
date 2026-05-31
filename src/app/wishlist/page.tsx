"use client";

import ProductCard from "@/components/ProductCard";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { HeartOff } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Favorites ({wishlistCount})</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed">
          <HeartOff className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-8">Save items you love to find them easily later.</p>
          <Link 
            href="/shop" 
            className="px-8 py-3 bg-primary text-white rounded-md font-bold hover:bg-orange-600 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}
