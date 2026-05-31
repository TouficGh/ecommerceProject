import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold capitalize">{category}</h1>
        <p className="text-gray-500">{filteredProducts.length} Products found</p>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl text-gray-600">No products found in this category.</h2>
        </div>
      )}
    </div>
  );
}
