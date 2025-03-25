import Link from "next/link";
import {
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                priority
                className="brightness-[0.85] mr-3"
              />
              <span className="text-xl font-bold">IndisInc.</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium supplier of high-quality soya bean DOC, flax seeds, and
              chia seeds. Committed to sustainability and excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/soya-bean"
                  className="text-gray-400 hover:text-white"
                >
                  Soya Bean DOC
                </Link>
              </li>
              <li>
                <Link
                  href="/products/flax-seeds"
                  className="text-gray-400 hover:text-white"
                >
                  Flax Seeds
                </Link>
              </li>
              <li>
                <Link
                  href="/products/chia-seeds"
                  className="text-gray-400 hover:text-white"
                >
                  Chia Seeds
                </Link>
              </li>
              <li>
                <Link
                  href="/products/kalonji-seeds"
                  className="text-gray-400 hover:text-white"
                >
                  Kalonji Seeds
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mustard-seeds"
                  className="text-gray-400 hover:text-white"
                >
                  Mustard Seeds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin
                  size={20}
                  className="text-gray-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">
                  E-253, Lal Kothi
                  <br />
                  Scheme Opp. Pani ki tanki
                  <br />
                  Jyotinagar Jaipur
                  <br />
                  Rajasthan
                  <br />
                  India
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 7976630412</span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 9461715443</span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">indis.incorp@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} IndisInc.. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-white text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
