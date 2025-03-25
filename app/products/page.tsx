import ProductList from "@/components/product-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | IndisInc.",
  description: "Explore our range of premium agricultural products",
};

export default function ProductsPage() {
  const products = [
    {
      id: "soya-bean",
      name: "Premium Soya Bean DOC",
      description: "High-protein soya bean DOC for optimal nutrition",
      image: "/Soyabean.png?height=400&width=600",
      category: "Beans",
    },
    {
      id: "flax-seeds",
      name: "Organic Flax Seeds",
      description: "Rich in omega-3 fatty acids and fiber",
      image: "/FlaxSeed.png?height=400&width=600",
      category: "Seeds",
    },
    {
      id: "chia-seeds",
      name: "Nutrient-Dense Chia Seeds",
      description: "Packed with antioxidants and essential nutrients",
      image: "/ChiaSeeds.png?height=400&width=600",
      category: "Seeds",
    },
    {
      id: "kalonji-seeds",
      name: "Kalonji Seed",
      description: "Rich in antioxidants and essential nutrients",
      image: "/KalonjiSeed/kalonji1.png?height=400&width=600",
      category: "Seeds",
    },
    {
      id: "mustard-seeds",
      name: "Premium Mustard Seeds",
      description: "Rich in oil content and essential nutrients",
      image: "/MustardSeed/mustardSeed3.png?height=400&width=600",
      category: "Seeds",
    },
  ];

  return (
    <>
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Explore our range of premium agricultural products, cultivated with
            care and processed to maintain maximum nutritional value.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ProductList products={products} />
      </div>
    </>
  );
}
