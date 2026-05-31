"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard = (product: ProductCardProps) => {
  const { id, name, price, image, category, rating } = product;
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isFav = isInWishlist(id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative bg-white rounded-lg border overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <button 
            onClick={toggleWishlist}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-full shadow-md transition-all z-10",
              isFav ? "bg-primary text-white" : "bg-white text-gray-400 hover:text-primary"
            )}
          >
            <Heart className={cn("h-4 w-4", isFav && "fill-current")} />
          </button>
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-white z-10"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <p className="text-xs text-gray-500 uppercase tracking-wider">{category}</p>
            <div className="flex items-center text-yellow-400">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-xs ml-1 text-gray-600">{rating}</span>
            </div>
          </div>
          <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors truncate">
            {name}
          </h3>
          <p className="mt-1 text-lg font-bold text-gray-900">${price.toFixed(2)}</p>
          <div className="mt-2 text-[10px] text-green-600 font-medium">Free Shipping</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
