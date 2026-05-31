import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About LUXE</h1>
        <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
            alt="Our Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="prose prose-lg mx-auto space-y-6 text-gray-700">
          <p>
            Welcome to LUXE, your number one source for all things premium. We're dedicated to giving you the very best of lifestyle products, with a focus on quality, customer service, and uniqueness.
          </p>
          <p>
            Founded in 2024, LUXE has come a long way from its beginnings. When we first started out, our passion for "quality over quantity" drove us to do intense research so that LUXE can offer you the world's most advanced premium essentials. We now serve customers all over the world, and are thrilled that we're able to turn our passion into our own website.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="font-semibold">
            Sincerely,<br />
            The LUXE Team
          </p>
        </div>
      </div>
    </div>
  );
}
