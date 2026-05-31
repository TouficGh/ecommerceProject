import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our products or your order? Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">support@luxe.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (555) 000-0000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">123 Design St, Creative City, 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input className="w-full border rounded-md px-3 py-2 text-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input className="w-full border rounded-md px-3 py-2 text-sm" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input className="w-full border rounded-md px-3 py-2 text-sm" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="w-full border rounded-md px-3 py-2 text-sm min-h-[150px]" placeholder="How can we help?" />
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-blue-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
