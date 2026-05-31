"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5" /> Filters
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm uppercase text-gray-500">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-primary" 
                      />
                      <span className={`text-sm group-hover:text-primary transition-colors ${selectedCategory === cat ? 'text-primary font-bold' : 'text-gray-600'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm uppercase text-gray-500">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary">
                    <input type="checkbox" className="accent-primary" /> $0 - $50
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary">
                    <input type="checkbox" className="accent-primary" /> $50 - $100
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary">
                    <input type="checkbox" className="accent-primary" /> $100+
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm uppercase text-gray-500">Ratings</h4>
                <div className="space-y-2">
                  {[4, 3, 2].map((r) => (
                    <label key={r} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-primary">
                      <input type="checkbox" className="accent-primary" /> {r} Stars & Up
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-gray-50 p-4 rounded-xl border">
            <h1 className="text-xl font-bold">
              {selectedCategory} Products <span className="text-gray-400 font-normal text-sm">({filteredProducts.length} items)</span>
            </h1>
            <div className="flex gap-4">
              <select className="bg-white border rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed">
              <h2 className="text-xl font-semibold text-gray-600">No products found</h2>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
