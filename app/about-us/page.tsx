import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | IndisInc.",
  description:
    "Learn about our journey, mission, and commitment to quality agricultural products",
};

export default function AboutUsPage() {
  return (
    <>
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            About Indis Inc.
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Committed to providing premium agricultural products that meet
            international standards and support sustainable farming practices.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              IndisInc. was founded in 2024 with a vision to provide
              high-quality agricultural products while supporting sustainable
              farming practices. What began as a small family business has grown
              into a trusted supplier of premium soya bean DOC, flax seeds, and
              chia seeds across the country.
            </p>
            <p className="text-gray-700 mb-6">
              Our journey has been guided by our commitment to quality,
              sustainability, and customer satisfaction. We work directly with
              farmers to ensure that our products meet the highest standards
              while promoting environmentally friendly cultivation methods.
            </p>
            <Link href="/contact-us">
              <Button className="bg-green-600 hover:bg-green-700">
                Get in Touch
              </Button>
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Our farm"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by our core principles, we strive to deliver excellence in
              every aspect of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
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
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We are committed to delivering products of the highest quality
                that exceed industry standards and customer expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We promote and practice sustainable agriculture that respects
                the environment and ensures the long-term viability of farming
                communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Farmer Partnerships
              </h3>
              <p className="text-gray-600">
                We build strong relationships with our farmers, ensuring fair
                practices and supporting their livelihoods through ethical
                business partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
              <span className="text-3xl font-bold text-green-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cultivation</h3>
            <p className="text-gray-600">
              We work with farmers who follow sustainable farming practices to
              cultivate our premium crops.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Harvesting</h3>
            <p className="text-gray-600">
              Crops are harvested at optimal times to ensure maximum nutritional
              value and quality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Processing</h3>
            <p className="text-gray-600">
              Our state-of-the-art processing facilities ensure the highest
              standards of cleanliness and quality preservation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-green-600">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Distribution</h3>
            <p className="text-gray-600">
              We deliver our products nationwide, ensuring they reach you in
              perfect condition.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
