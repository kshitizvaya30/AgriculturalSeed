import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import BannerSection from "@/components/banner-section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: "soya-bean",
      name: "Premium Soya Bean DOC",
      description: "High-protein soya bean DOC for optimal nutrition",
      image: "/Soyabean.png?height=400&width=600",
    },
    {
      id: "flax-seeds",
      name: "Organic Flax Seeds",
      description: "Rich in omega-3 fatty acids and fiber",
      image: "/FlaxSeed.png?height=400&width=600",
    },
    {
      id: "chia-seeds",
      name: "Nutrient-Dense Chia Seeds",
      description: "Packed with antioxidants and essential nutrients",
      image: "/ChiaSeeds.png?height=400&width=600",
    },
    {
      id: "kalonji-seeds",
      name: "Kalonji Seed",
      description: "Rich in antioxidants and essential nutrients",
      image: "/KalonjiSeed/kalonji1.png?height=400&width=600",
    },
    {
      id: "mustard-seeds",
      name: "Premium Mustard Seeds",
      description: "Rich in oil content and essential nutrients",
      image: "/MustardSeed/mustardSeed1.png?height=400&width=600",
    },
  ];

  return (
    <>
      <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/HomePage.png?height=600&width=1200"
          alt="Agricultural fields"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
            Premium Agricultural Products
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md mb-8 max-w-3xl">
            Supplying high-quality soya bean DOC, flax seeds, and chia seeds for
            optimal nutrition and health
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Link href="/products">Explore Our Products</Link>
          </Button>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Premium Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality agricultural products,
              cultivated with care and processed to maintain maximum nutritional
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BannerSection
        title="We Deliver Quality"
        description="Our products undergo rigorous quality checks to ensure you receive only the best"
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing premium agricultural products that
              meet international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Products cultivated under optimal conditions to ensure highest
                quality
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethically Sourced</h3>
              <p className="text-gray-600">
                Fair trade practices that support local farming communities
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
              <p className="text-gray-600">
                All products meet international quality and safety standards
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Nationwide Delivery and International Shipping
              </h3>
              <p className="text-gray-600">
                Fast and reliable shipping to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
