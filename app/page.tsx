import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import BannerSection from "@/components/banner-section";
import ImageCarousel from "@/components/image-carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const exportCountries = [
    {
      name: "Oman",
      flag: "/flags/Oman3.png",
      hoverColor: "hover:bg-[rgba(223,26,35,0.8)]",
    },
    {
      name: "Saudi Arabia",
      flag: "/flags/Saudi.png",
      hoverColor: "hover:bg-[rgba(0,128,0,0.8)]",
    },
    {
      name: "Vietnam",
      flag: "/flags/Vietnam.png",
      hoverColor: "hover:bg-[rgba(217,36,28,0.8)]",
    },
    {
      name: "Dubai, UAE",
      flag: "/flags/UAE.png",
      hoverColor: "hover:bg-[rgba(0,115,47,0.8)]",
    },
    {
      name: "Malaysia",
      flag: "/flags/Malaysia.png",
      hoverColor: "hover:bg-[rgba(0,0,102,0.8)]",
    },
    {
      name: "Bangladesh",
      flag: "/flags/Bangladesh.png",
      hoverColor: "hover:bg-[rgba(0,105,77,0.8)]",
    },
    {
      name: "Indonesia",
      flag: "/flags/Indonesia.png",
      hoverColor: "hover:bg-[rgba(255,0,0,0.8)]",
    },
    {
      name: "Qatar",
      flag: "/flags/Qatar2.jpg",
      hoverColor: "hover:bg-[rgba(122,14,48,0.8)]",
    },
  ];

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
    {
      id: "cow-dung",
      name: "Premium Cow Dung / Powder",
      description:
        "Rich in nitrogen, phosphorus, and potassium, and beneficial microorganisms.",
      image: "/CowDung/cowDung1.jpg?height=400&width=600",
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

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              State-of-the-Art Manufacturing Facility
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                Welcome to our cutting-edge agricultural processing facility,
                where tradition meets innovation. Our state-of-the-art factory
                combines advanced technology with sustainable practices to
                deliver premium quality agricultural products. Equipped with the
                latest processing machinery and stringent quality control
                systems, we ensure every product meets international standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From careful seed selection to advanced processing techniques,
                our facility maintains optimal conditions throughout the
                production cycle. Our dedicated team of experts oversees each
                stage, ensuring consistent quality and nutritional value. With a
                commitment to sustainability, we've implemented eco-friendly
                practices and energy-efficient systems, making us a leader in
                responsible agricultural processing.
              </p>
            </div>
            <div className="mt-8 text-gray-700 font-medium">
              <h2 className="text-xl font-bold mb-4">Our Factory Locations</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>C-16,17 Star Gold Industrial Park, Kuha, Ahmedabad</li>
                <li>Madhya Pradesh, India</li>
              </ul>
            </div>
          </div>
          <ImageCarousel
            images={[
              {
                src: "/Factory/1.jpg?height=600&width=1200",
                alt: "Our state-of-the-art processing facility",
              },
              {
                src: "/Factory/3.jpg?height=600&width=1200",
                alt: "Quality control process",
              },
              {
                src: "/Factory/11.jpg?height=600&width=1200",
                alt: "Storage and packaging facility",
              },
              {
                src: "/Factory/Fac1.jpg?height=600&width=1200",
                alt: "Product testing laboratory",
              },
            ]}
          />
        </div>
      </section>

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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Farmers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting agricultural communities with high-quality products and
              sustainable farming practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/FarmerPhotos/5.jpg"
                alt="Quality Seeds for Farmers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="text-white font-semibold">Quality Seeds</h3>
                <p className="text-white/80 text-sm">
                  Premium seeds for better yields
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/FarmerPhotos/2.jpeg"
                alt="Sustainable Farming Practices"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="text-white font-semibold">
                  Sustainable Farming
                </h3>
                <p className="text-white/80 text-sm">
                  Eco-friendly agricultural solutions
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/SoyaFactory/soyaFactory2.jpg"
                alt="Modern Processing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="text-white font-semibold">Modern Processing</h3>
                <p className="text-white/80 text-sm">
                  State-of-the-art facilities
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/FarmerPhotos/4.jpg"
                alt="Organic Solutions"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="text-white font-semibold">Organic Solutions</h3>
                <p className="text-white/80 text-sm">
                  Natural farming products
                </p>
              </div>
            </div>
          </div>
          <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Global Reach
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We proudly export our premium agricultural products to these
                  countries
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {exportCountries.map((country, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center p-4 bg-gray-50 ${country.hoverColor} transition-colors duration-300 rounded-lg shadow-sm h-[160px] justify-between`}
                  >
                    <div className="h-[80px] flex items-center justify-center">
                      <Image
                        src={country.flag}
                        alt={`${country.name} Flag`}
                        width={80}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium text-center">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
