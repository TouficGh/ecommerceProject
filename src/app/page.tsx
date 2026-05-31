import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
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
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Elevate Your <span className="text-primary">Lifestyle</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
            Discover our curated collection of premium essentials designed to improve your daily routine. Experience quality like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              Shop Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/categories" 
              className="px-8 py-4 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              View Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <Truck className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On all orders over $100</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Secure Payments</h3>
              <p className="text-sm text-gray-600">100% secure payment processing</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">We're here to help anytime</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <CreditCard className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Money Back</h3>
              <p className="text-sm text-gray-600">30 days money back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-gray-600">Our most popular items this week</p>
            </div>
            <Link href="/shop" className="text-primary font-semibold flex items-center gap-1 hover:underline underline-offset-4">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
            <Link href="/shop/electronics" className="relative group overflow-hidden rounded-xl md:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&q=80"
                alt="Electronics"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Electronics</h3>
                  <p className="text-white/80">Cutting-edge technology</p>
                </div>
              </div>
            </Link>
            <div className="grid grid-rows-2 gap-6">
              <Link href="/shop/fashion" className="relative group overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
                  alt="Fashion"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Fashion</h3>
                    <p className="text-white/80 text-sm">Latest trends</p>
                  </div>
                </div>
              </Link>
              <Link href="/shop/lifestyle" className="relative group overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80"
                  alt="Lifestyle"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Lifestyle</h3>
                    <p className="text-white/80 text-sm">Premium living</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Special Offer: 20% Off Your First Order</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
            Join our community and get exclusive access to new drops and seasonal sales. Use code <span className="font-mono font-bold bg-white/20 px-2 py-1 rounded">WELCOME20</span> at checkout.
          </p>
          <Link 
            href="/shop" 
            className="px-10 py-4 bg-white text-primary rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
