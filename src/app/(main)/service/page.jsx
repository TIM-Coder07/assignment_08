"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Tile Installation",
    description:
      "Professional tile installation for floors, walls, kitchens, and bathrooms with perfect finishing.",
    features: [
      "Precision cutting & fitting",
      "Waterproof finishing",
      "Long-lasting durability",
    ],
  },
  {
    title: "Custom Design",
    description:
      "We help you choose and design tiles that match your home or business interior style.",
    features: [
      "3D design consultation",
      "Color matching support",
      "Modern & classic styles",
    ],
  },
  {
    title: "Repair & Replacement",
    description:
      "Old or damaged tiles? We repair and replace them with high-quality materials.",
    features: [
      "Quick repair service",
      "Affordable pricing",
      "Damage-free removal",
    ],
  },
  {
    title: "Commercial Projects",
    description:
      "Large-scale tile solutions for offices, malls, hotels, and commercial spaces.",
    features: [
      "Bulk project handling",
      "On-time delivery",
      "Industrial-grade materials",
    ],
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-[#f7f2ee] py-12 px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-[#63483a]">Our Services</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We provide premium tile solutions for residential and commercial
          spaces with expert craftsmanship and modern design.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#63483a] mb-2">
              {service.title}
            </h2>

            <p className="text-sm text-gray-600 mb-4">{service.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-4">
              {service.features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <CheckCircle size={16} className="text-green-600" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-block text-sm text-[#63483a] font-medium hover:underline"
            >
              Request Service →
            </Link>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto mt-20 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-[#63483a]">Expert Team</h3>
          <p className="text-sm text-gray-600 mt-2">
            Skilled professionals with years of experience in tile work.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-[#63483a]">Best Quality</h3>
          <p className="text-sm text-gray-600 mt-2">
            We use premium materials for long-lasting results.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-[#63483a]">
            Affordable Price
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            High-quality service at a reasonable cost.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 bg-[#63483a] text-[#edd0b9] py-12 px-6 text-center rounded-xl container mx-auto">
        <h2 className="text-2xl font-bold">Ready to Start Your Project?</h2>
        <p className="mt-2 text-sm opacity-80">
          Contact our team today for a free consultation and quote.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-5 bg-[#edd0b9] text-[#63483a] px-5 py-2 rounded-md font-medium hover:scale-105 transition"
        >
          Get Free Quote
        </Link>
      </div>
    </div>
  );
};

export default ServicePage;
