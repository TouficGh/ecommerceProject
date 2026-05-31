"use client";

import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

const ProductCard = (product: ProductCardProps) => {
  const { name, price, image, category, rating } = product;
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-lg border overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-white"
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
      </div>
    </div>
  );
};

export default ProductCard;
