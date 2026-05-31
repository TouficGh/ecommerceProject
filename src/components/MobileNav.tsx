"use client";

import Link from "next/link";
import { Home, Search, Heart, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MobileNav = () => {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Search", icon: Search, href: "/shop" },
    { name: "Favorites", icon: Heart, href: "/wishlist", count: wishlistCount },
    { name: "Cart", icon: ShoppingCart, href: "/cart", count: totalItems },
    { name: "Profile", icon: User, href: "/login" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50 px-4 py-2 flex justify-between items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link 
            key={item.name} 
            href={item.href} 
            className={cn(
              "flex flex-col items-center gap-1 p-1 relative min-w-[60px]",
              isActive ? "text-primary" : "text-gray-500"
            )}
          >
            <Icon className="h-6 w-6" />
            <span className="text-[10px] font-medium">{item.name}</span>
            {item.count !== undefined && item.count > 0 && (
              <span className="absolute top-0 right-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] text-white">
                {item.count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
