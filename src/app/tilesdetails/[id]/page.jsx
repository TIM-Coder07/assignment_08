// 'use client'
import { getTilesDetailsById } from '@/lib/api-fetch';
import Image from 'next/image';

const tilesdetails = async({params}) => {
    const {id} = await params;
    const product = await getTilesDetailsById(id);

    return (
        <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* 🖼️ Left Side Image */}
        <div className="w-full">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* 📄 Right Side Content */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-[#3b2f2f]">
            {product.title}
          </h1>

          <p className="text-gray-600">{product.description}</p>

          {/* 💰 Price */}
          <p className="text-xl font-semibold text-[#63483a]">
            {product.price} {product.currency}
          </p>

          {/* 📦 Info */}
          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-semibold">Material:</span> {product.material}</p>
            <p><span className="font-semibold">Dimensions:</span> {product.dimensions}</p>
            <p><span className="font-semibold">Category:</span> {product.category}</p>
          </div>

          {/* 🟢 Stock */}
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
              product.inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>

          {/* 🏷️ Tags */}
          <div className="flex gap-2 flex-wrap mt-3">
            <span className="bg-[#edd0b9] text-[#63483a] px-3 py-1 rounded-full text-xs">
              Minimalist
            </span>
            <span className="bg-[#edd0b9] text-[#63483a] px-3 py-1 rounded-full text-xs">
              Blue
            </span>
          </div>

          {/* 🛒 Button */}
          <button className="mt-5 bg-[#63483a] text-white px-6 py-2 rounded-xl hover:bg-[#4e372d] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    );
};

export default tilesdetails;