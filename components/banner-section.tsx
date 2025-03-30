import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BannerSectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function BannerSection({ title, description, buttonText, buttonLink }: BannerSectionProps) {
  return (
    <section className="bg-green-600 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-green-50">{description}</p>
        <Button variant="outline" size="lg" className="bg-green-600 text-white border-white hover:bg-white hover:text-green-600 transition-colors">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}

