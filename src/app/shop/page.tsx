import ProductCard from "@/components/ProductCard";

const allProducts = [
  {
    id: 1,
    name: "Classic Leather Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Accessories",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Minimalist Backpack",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "Bags",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Noise Cancelling Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 129.50,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
    category: "Gadgets",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Modern Table Lamp",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507473884658-c70b6be16a3f?w=800&q=80",
    category: "Lifestyle",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Premium Coffee Mug",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
    category: "Lifestyle",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Ergonomic Chair",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1505797149-43b00000465c?w=800&q=80",
    category: "Furniture",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    category: "Electronics",
    rating: 4.7,
  },
];

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">All Products</h1>
        <div className="flex gap-4">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
