import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
    count: "120+ Products"
  },
  {
    name: "Fashion",
    slug: "fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    count: "450+ Products"
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
    count: "300+ Products"
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    count: "200+ Products"
  },
  {
    name: "Bags",
    slug: "bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    count: "80+ Products"
  },
  {
    name: "Gadgets",
    slug: "gadgets",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
    count: "150+ Products"
  }
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.slug} 
            href={`/shop/${category.slug}`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gray-100"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold mb-1">{category.name}</h2>
              <p className="text-white/80 text-sm">{category.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
