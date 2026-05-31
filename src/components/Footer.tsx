import Link from "next/link";
import { MessageCircle, Camera, Globe, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">LUXE</h3>
            <p className="text-sm text-gray-600">
              The ultimate destination for premium lifestyle products. Quality and style delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <MessageCircle className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
              <Camera className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
              <Share2 className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
              <Globe className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Best Sellers</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Sale</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LUXE Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
