"use client";

import { use } from "react";
import Image from "next/image";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Star, ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = parseInt(resolvedParams.id);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-primary hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const isFav = isInWishlist(product.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-xl overflow-hidden border bg-gray-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-md overflow-hidden border bg-gray-50 cursor-pointer hover:border-primary">
                <Image
                  src={product.image}
                  alt={`${product.name} view ${i}`}
                  fill
                  className="object-cover opacity-60"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-primary bg-orange-50 px-2 py-0.5 rounded">
                {product.category}
              </span>
              <div className="flex items-center text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={cn("h-4 w-4", s <= Math.floor(product.rating) ? "fill-current" : "text-gray-300")} />
                ))}
                <span className="text-sm ml-2 text-gray-600">({product.rating})</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-bold text-primary mt-4">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-3">
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="grid grid-cols-2 gap-2">
              {product.features?.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-primary text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button 
              onClick={() => isFav ? removeFromWishlist(product.id) : addToWishlist(product)}
              className={cn(
                "px-6 py-4 rounded-lg font-bold border transition-colors flex items-center justify-center gap-2",
                isFav ? "bg-orange-50 border-primary text-primary" : "bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
              )}
            >
              <Heart className={cn("h-5 w-5", isFav && "fill-current")} />
              {isFav ? "Favorited" : "Add to Favorites"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck className="h-5 w-5 text-primary" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <RotateCcw className="h-5 w-5 text-primary" />
              <span>30 Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
