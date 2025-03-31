import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle, Download } from "lucide-react";

interface ProductData {
  name: string;
  description: string;
  longDescription: string;
  benefits: string[];
  applications: string[];
  specifications: Record<string, string>;
  category: string;
  images: string[];
  carouselSection?: {
    heading: string;
    subheading: string;
    images: string[];
  };
}

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API or database
  const resolvedParams = await params;
  const product = await getProductData(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Indis Inc.`,
    description: product.description,
  };
}

// This would typically come from an API or database
async function getProductData(slug: string): Promise<ProductData | undefined> {
  const products = {
    "soya-bean": {
      name: "Premium Soya Bean DOC",
      description:
        "High-protein soya bean DOC with multiple protein variants, low oil content, and optimal moisture for superior animal feed formulations.",
      longDescription:
        "Our Premium Soya Bean DOC is available in three protein variants—46%, 47%, and 48%—making it suitable for various animal feed formulations. With a low oil content of less than 1%, it ensures high protein concentration and better digestibility for livestock and poultry. It maintains an optimal moisture level of 10-12%, making it ideal for long-term storage and export, especially to Gulf countries. Additionally, it is rich in essential amino acids, fiber, and other nutrients, promoting the overall growth and health of animals.",
      benefits: [
        "Available in 46%, 47%, and 48% protein variants",
        "Low oil content (<1%) for better digestibility",
        "Optimal moisture level (10-12%) for long-term storage",
        "Rich in amino acids, fiber, and essential nutrients",
        "Enhances livestock and poultry growth",
      ],
      applications: [
        "Animal feed formulations for livestock and poultry",
        "Protein-rich supplements for enhanced nutrition",
        "Ideal for export markets, especially Gulf countries",
        "Used in high-quality feed manufacturing industries",
      ],
      specifications: {
        protein: "46%, 47%, 48%",
        moisture: "10-12%",
        oilContent: "<1%",
        foreignMatter: "1% maximum",
        purity: "99% minimum",
        packaging: "25kg, 50kg bags or as per requirement",
      },
      category: "Animal Feed",
      images: [
        "/Soyabean.png?height=600&width=800",
        "/Soyabean/Soyabean2.png?height=600&width=800",
        "/Soyabean/Soyabean3.png?height=600&width=800",
        "/Soyabean/Soyabean4.png?height=600&width=800",
      ],
      carouselSection: {
        heading: "Processing & Quality",
        subheading:
          "Our state-of-the-art processing ensures consistent quality in every batch",
        images: [
          "/SoyaFactory/soyaFactory5.jpg?height=600&width=800",
          "/SoyaFactory/soyaFactory2.jpg?height=600&width=800",
          "/SoyaFactory/soyaFactory3.jpg?height=600&width=800",
          "/SoyaFactory/soyaFactory4.jpg?height=600&width=800",
        ],
      },
    },
    "flax-seeds": {
      name: "Organic Flax Seeds",
      description:
        "Rich in omega-3 fatty acids and fiber, available in multiple grades and varieties for diverse applications in food and feed industries.",
      longDescription:
        "Our Organic Flax Seeds are premium quality, carefully cultivated without the use of chemical fertilizers or pesticides. We offer multiple grades, including Premium (99% purity), Standard (95-98% purity), and Industrial Grade (below 95% purity), catering to various market demands. Available in Brown and Golden varieties, our flax seeds are widely used in oil extraction, bakery products, food processing, and animal feed. We ensure strict quality control with single and double Sortex cleaning, maintaining impurity-free seeds with optimal moisture levels for long shelf life and suitability for international export.",
      benefits: [
        "Available in Premium (99%), Standard (95-98%), and Industrial Grade",
        "Brown and Golden flax seed varieties for versatile applications",
        "Excellent source of omega-3 fatty acids for heart health",
        "High in dietary fiber for digestive well-being",
        "Strict quality control with Sortex (Single & Double) cleaning",
        "Ideal for long-term storage and international export",
      ],
      applications: [
        "Oil extraction for flaxseed oil production",
        "Incorporation into bakery and food products",
        "Used in animal feed formulations",
        "Added to smoothies, yogurt, or oatmeal for nutrition",
        "Sprinkled on salads or blended into protein shakes",
      ],
      specifications: {
        purity: "Premium (99%), Standard (95-98%), Industrial (<95%)",
        varieties: "Brown and Golden",
        sortex: "Single & Double Available",
        omega3: "18-22g per 100g",
        moisture: "9% maximum",
        foreignMatter: "0.1% maximum",
        packaging: "5kg, 10kg, 25kg bags or as per requirement",
      },
      category: "Seeds",
      images: [
        "/FlaxSeed/FlaxSeedMain.png?height=600&width=800",
        "/FlaxSeed/FlaxSeed1.jpeg?height=600&width=800",
        "/FlaxSeed/FlaxSeed5.png?height=600&width=800",
        "/FlaxSeed/FlaxSeed4.png?height=600&width=800",
      ],
      carouselSection: {
        heading: "Farm to Table Journey",
        subheading: "Follow our flax seeds from cultivation to packaging",
        images: [
          "/FlaxSeedFactory/1.jpg?height=600&width=800",
          "/FlaxSeedFactory/5.jpg?height=600&width=800",
          "/FlaxSeedFactory/2.jpg?height=600&width=800",
          "/FlaxSeedFactory/3.jpg?height=600&width=800",
        ],
      },
    },
    "chia-seeds": {
      name: "Nutrient-Dense Chia Seeds",
      description:
        "Packed with antioxidants, fiber, and essential nutrients, available in multiple grades for food and feed industries.",
      longDescription:
        "Our premium Chia Seeds are tiny nutritional powerhouses, offering an impressive array of health benefits. We supply A-Grade (99% purity), B-Grade (95-98% purity), and C-Grade (below 95% purity) to cater to various industries, including food and animal feed sectors. Though not fully organic, our chia seeds are grown with minimal chemical intervention while maintaining high omega-3, fiber, and protein content. We ensure strict quality checks using advanced cleaning, sorting, and grading processes to eliminate impurities, ensuring superior quality and customized packaging for global markets.",
      benefits: [
        "Available in A-Grade (99%), B-Grade (95-98%), and C-Grade (<95%)",
        "Rich in omega-3 fatty acids (higher than salmon per gram)",
        "High fiber content (34-40%) for digestive health",
        "Complete protein with all essential amino acids",
        "Strict quality control with advanced cleaning and sorting",
        "Customized packaging for long shelf life and export",
      ],
      applications: [
        "Production of nutritious chia puddings",
        "Used as an egg replacement in baking",
        "Added to smoothies, yogurt, or oatmeal",
        "Formulated into energy gels for endurance athletes",
        "Sprinkled on salads, soups, or vegetables",
      ],
      specifications: {
        purity: "A-Grade (99%), B-Grade (95-98%), C-Grade (<95%)",
        protein: "16-18%",
        fiber: "34-40%",
        omega3: "25-30%",
        moisture: "5-8%",
        qualityControl: "Advanced cleaning, sorting, and grading",
        packaging: "1kg, 5kg, 25kg bags or as per requirement",
      },
      category: "Seeds",
      images: [
        "/ChiaSeeds.png?height=600&width=800",
        "/ChiaSeed/chiaSeeds.jpg?height=600&width=800",
        "/ChiaSeed/chiaSeeds3.png?height=600&width=800",
        "/ChiaSeed/chiaSeeds2.png?height=600&width=800",
      ],
      carouselSection: {
        heading: "Nutritional Benefits",
        subheading:
          "Discover the health benefits and versatile uses of chia seeds",
        images: [
          "/ChiaSeedsFactory/1.jpg?height=600&width=800",
          "/ChiaSeedsFactory/2.jpg?height=600&width=800",
          "/ChiaSeedsFactory/3.jpg?height=600&width=800",
          "/ChiaSeedsFactory/4.jpeg?height=600&width=800",
        ],
      },
    },
    "kalonji-seeds": {
      name: "Premium Kalonji Seeds",
      description:
        "Rich in essential oils and antioxidants, available in multiple grades and sizes for diverse applications in food, healthcare, and cosmetics.",
      longDescription:
        "Our Premium Kalonji Seeds are carefully selected to meet the highest quality standards. We offer three grades: Premium (99% purity), Standard (95-98% purity), and Industrial Grade (below 95% purity), catering to different industry needs. Available in small, medium, and large sizes, our Kalonji seeds are widely used in spices, oil extraction, herbal remedies, and cosmetic formulations. Packed with essential oils and powerful antioxidants, they are highly valued in the healthcare and food industries. We ensure strict quality control with impurity-free processing, optimal moisture levels, and packaging that meets global export standards.",
      benefits: [
        "Available in Premium (99%), Standard (95-98%), and Industrial Grade",
        "Variety in sizes (small, medium, large) for multiple applications",
        "High in essential oils with strong medicinal properties",
        "Rich in antioxidants, supporting overall health benefits",
        "Strict quality control for impurity-free, moisture-controlled seeds",
        "Ideal for long-term storage and international export",
      ],
      applications: [
        "Used as a spice in various culinary preparations",
        "Oil extraction for medicinal and cosmetic use",
        "Key ingredient in herbal remedies and traditional medicine",
        "Incorporated into skincare and haircare products",
        "Blended into health supplements for added benefits",
      ],
      specifications: {
        purity: "Premium (99%), Standard (95-98%), Industrial (<95%)",
        sizes: "Small, Medium, Large",
        essentialOils: "High content",
        antioxidants: "Rich source",
        moisture: "Optimally controlled for long shelf life",
        qualityControl: "Strict impurity removal and grading process",
        packaging: "1kg, 5kg, 25kg bags or as per requirement",
      },
      category: "Seeds",
      images: [
        "/KalonjiSeed/kalonji1.png?height=600&width=800",
        "/KalonjiSeed/kalonji2.png?height=600&width=800",
        "/KalonjiSeed/kalonji3.png?height=600&width=800",
        "/KalonjiSeed/kalonji4.png?height=600&width=800",
      ],
      carouselSection: {
        heading: "Traditional Uses",
        subheading:
          "Explore the traditional and modern applications of kalonji seeds",
        images: [
          "/ChiaSeedsFactory/1.jpg?height=600&width=800",
          "/ChiaSeedsFactory/2.jpg?height=600&width=800",
          "/ChiaSeedsFactory/3.jpg?height=600&width=800",
          "/ChiaSeedsFactory/4.jpeg?height=600&width=800",
        ],
      },
    },
    "mustard-seeds": {
      name: "Premium Mustard Seeds",
      description:
        "Rich in oil content and essential nutrients, available in multiple grades and varieties for diverse applications in food, oil extraction, and medicinal uses.",
      longDescription:
        "Our Premium Mustard Seeds are carefully sourced and processed to meet the highest quality standards. We offer three grades: Premium (99% purity), Standard (95-98% purity), and Industrial Grade (below 95% purity), catering to various industries including food, oil extraction, and industrial applications. Available in Black, Brown, and Yellow varieties, mustard seeds are widely used as spices, in condiments, for oil extraction, and in medicinal formulations. With a high oil content (30-40%) and rich antioxidant properties, our mustard seeds provide exceptional nutritional value. We ensure strict quality control with impurity-free cleaning, moisture optimization, and packaging suitable for long shelf life and global export standards.",
      benefits: [
        "Available in Premium (99%), Standard (95-98%), and Industrial Grade",
        "Variety of types: Black, Brown, and Yellow mustard seeds",
        "High oil content (30-40%) for superior extraction yield",
        "Rich in essential nutrients, antioxidants, and medicinal properties",
        "Strict quality control for impurity-free, moisture-optimized storage",
        "Ideal for long-term storage and international export",
      ],
      applications: [
        "Used as a spice in various culinary preparations",
        "Oil extraction for cooking and industrial use",
        "Key ingredient in condiments like mustard paste and sauces",
        "Incorporated into herbal and medicinal formulations",
        "Blended into livestock feed for nutritional benefits",
      ],
      specifications: {
        purity: "Premium (99%), Standard (95-98%), Industrial (<95%)",
        varieties: "Black, Brown, Yellow",
        oilContent: "30-40%",
        nutritionalValue: "High in antioxidants and essential nutrients",
        moisture: "Optimally controlled for long shelf life",
        qualityControl: "Strict impurity removal and grading process",
        packaging: "1kg, 5kg, 25kg bags or as per requirement",
      },
      category: "Seeds",
      images: [
        "/ChiaSeedsFactory/1.jpg?height=600&width=800",
        "/ChiaSeedsFactory/2.jpg?height=600&width=800",
        "/ChiaSeedsFactory/3.jpg?height=600&width=800",
        "/ChiaSeedsFactory/4.jpeg?height=600&width=800",
      ],
    },
    "cow-dung": {
      name: "Premium Cow Dung / Powder",
      description:
        "Rich in organic nutrients and beneficial microorganisms, available in various forms for agricultural, composting, and natural fertilizing uses.",
      longDescription:
        "Our Premium Cow Dung / Powder is sourced from healthy, well-maintained cows and carefully processed to provide a natural, nutrient-rich product for a variety of uses. It can be used in agriculture to enhance soil health, in organic composting, and as a natural fertilizer for gardening. Cow dung is rich in organic matter and contains essential nutrients like nitrogen, phosphorus, and potassium, making it an excellent choice for enriching soil fertility. The product is also used in various traditional and eco-friendly applications, such as fuel and in making natural pest repellents. We ensure that our cow dung is free from harmful chemicals and undergoes a strict drying process to ensure purity and quality for long-term storage and export standards.",
      benefits: [
        "Rich in organic nutrients and beneficial microorganisms",
        "High in nitrogen, phosphorus, and potassium for soil enrichment",
        "Suitable for agricultural, gardening, and composting purposes",
        "Natural fertilizer free from harmful chemicals or additives",
        "Ideal for enhancing soil health and promoting plant growth",
        "Strict drying process ensures impurity-free product and long shelf life",
      ],
      applications: [
        "Used as an organic fertilizer for improving soil fertility",
        "Key ingredient in composting and organic gardening",
        "Can be used as a natural fuel source in rural areas",
        "Incorporated into traditional pest control and repellent formulations",
        "Suitable for use in various eco-friendly, organic farming practices",
      ],
      specifications: {
        purity: "100% organic, free from chemicals and harmful additives",
        nutrientContent: "High in nitrogen, phosphorus, and potassium",
        moisture: "Optimally dried to prevent spoilage",
        microbialContent: "Rich in beneficial microorganisms for soil health",
        packaging: "10kg, 25kg, 50kg bags or as per requirement",
      },
      category: "Organic Fertilizers",
      images: [
        "/CowDung/cowDung1.jpg?height=600&width=800",
        "/CowDung/cowDung2.jpg?height=600&width=800",
        "/CowDung/cowDung3.jpeg?height=600&width=800",
        "/CowDung/cowDung4.jpg?height=600&width=800",
      ],
      carouselSection: {
        heading: "Product Applications",
        subheading:
          "See how our products are used in various agricultural settings",
        images: [
          "/CowDungFactory/1.jpg?height=600&width=800",
          "/CowDungFactory/2.jpeg?height=600&width=800",
          "/CowDungFactory/3.jpg?height=600&width=800",
          "/CowDung/cowDung4.jpg?height=600&width=800",
        ],
      },
    },
  };

  return products[slug as keyof typeof products];
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await getProductData(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center text-green-700 hover:text-green-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            {product.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="border rounded-lg overflow-hidden mb-4">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden cursor-pointer"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} image ${index + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Product Overview</h2>
              <p className="text-gray-700 mb-6">{product.longDescription}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Category</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-col space-y-4">
                <Link href="/contact-us" className="w-full">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 w-full"
                  >
                    Request a Quote
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Specification Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="pt-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Product Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <div className="text-sm text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                    <div className="font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="applications" className="pt-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Recommended Applications
              </h3>
              <ul className="space-y-4">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        {product.carouselSection && (
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-medium mb-2">
              {product.carouselSection.heading}
            </h3>
            <p className="text-gray-600 mb-6">
              {product.carouselSection.subheading}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.carouselSection.images.map(
                (image: string, index: number) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden cursor-pointer hover:border-green-500 transition-colors"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.carouselSection?.heading} view ${
                          index + 1
                        }`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Place an Order?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our sales team for bulk orders, custom packaging options, or
            any questions about our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Contact Us
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link href="/products">Browse More Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
