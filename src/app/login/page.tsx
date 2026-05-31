"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border shadow-sm">
        <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-8">Login to your LUXE account</p>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input 
              type="email" 
              className="w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:outline-none transition-all" 
              placeholder="name@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium flex justify-between">
              Password
              <Link href="#" className="text-primary text-xs hover:underline">Forgot password?</Link>
            </label>
            <input 
              type="password" 
              className="w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:outline-none transition-all" 
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-all mt-4">
            Login
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="#" className="text-primary font-bold hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
