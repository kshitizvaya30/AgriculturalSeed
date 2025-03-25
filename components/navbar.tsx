"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="flex items-center justify-center md:justify-start space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200"
            >
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200"
            >
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200"
            >
              <Facebook size={18} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200"
            >
              <Youtube size={18} />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-sm mt-2 md:mt-0">
            <div className="flex items-center justify-center">
              <Phone size={16} className="mr-2" />
              <span>+91 9461715443</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone size={16} className="mr-2" />
              <span>+91 7976630412</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail size={16} className="mr-2" />
              <span>indis.incorp@gmail.com</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock size={16} className="mr-2" />
              <span>Mon - Sat / 9:00 AM - 8:00 PM IST</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-48">
                <div className="flex items-center">
                  <Image
                    src="/logo3.png"
                    alt="logo3"
                    width={70}
                    height={70}
                    priority
                    className="brightness-[0.85] mr-3"
                  />
                  <span className="text-xl font-bold text-green-600">
                    IndisInc.
                  </span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Products
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Contact Us
              </Link>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/contact-us">ENQUIRY HERE</Link>
              </Button>
            </nav>

            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              priority
              className="brightness-[0.85] mr-3"
            />
            <span className="text-xl font-bold text-green-600">IndisInc.</span>
          </Link>
          <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-green-600 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-gray-700 hover:text-green-600 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-green-600 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-700 hover:text-green-600 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Button className="bg-green-600 hover:bg-green-700 w-full">
            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
              ENQUIRY HERE
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
