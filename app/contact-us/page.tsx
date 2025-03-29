import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Indis Inc.",
  description:
    "Get in touch with us for inquiries, orders, or any questions about our products",
};

export default function ContactUsPage() {
  return (
    <>
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with our team for
            inquiries, orders, or any questions about our products.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Product Inquiry" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    rows={6}
                  />
                </div>

                <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg border mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      E-253, Lal Kothi
                      <br />
                      Scheme Opp. Pani ki tanki
                      <br />
                      Jyotinagar Jaipur
                      <br />
                      Rajasthan
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9461715443</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 7976630412</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">indis.incorp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday
                      <br />
                      9:00 AM - 8:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-600 p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Bulk Orders</h3>
              <p className="mb-6">
                Looking for bulk quantities for commercial use? Our team is
                ready to assist you with competitive pricing and delivery
                options.
              </p>
              <Button
                variant="outline"
                className="bg-white text-green-600 hover:bg-green-50 border-white"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full bg-gray-200 mt-12">
        {/* Google Maps iframe would go here in a real implementation */}
        <div className="h-full w-full flex items-center justify-center bg-gray-200">
          <p className="text-gray-500">Map Loading...</p>
        </div>
      </div>
    </>
  );
}
