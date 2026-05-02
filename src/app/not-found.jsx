'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold tracking-widest mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 transition">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl border border-gray-600 hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
